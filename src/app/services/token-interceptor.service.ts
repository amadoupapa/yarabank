import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, switchMap, throwError } from 'rxjs';

import { Router } from '@angular/router';
import { TokenApiModel } from '../model/TokenApiModel/TokenApiModel';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor{
  refresh=false;

  constructor(private auth: AuthService, private router: Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const myToken = this.auth.getAccessToken();
   

  if(myToken){
    request = request.clone({
      setHeaders: {Authorization:`Bearer ${myToken}`} 
    })
    


  }

  return next.handle(request).pipe(
    catchError((error)=>{
      if(error instanceof HttpErrorResponse &&
        !request.url.includes('authentication') &&
        error.status === 0 ! && !this.refresh ){
          this.refresh =true;
         return this.handleUnAuthorizedError(request,next); 
      }
      return throwError(() => error);
      
    })
  );
}


handleUnAuthorizedError(req: HttpRequest<any>, next: HttpHandler){
  let tokeApiModel = new TokenApiModel();
  tokeApiModel.accessToken = this.auth.getAccessToken();
  tokeApiModel.refreshToken = this.auth.getRefreshToken();
  return this.auth.refreshToken(tokeApiModel)
  .pipe(
    switchMap((data:TokenApiModel)=>{
      this.auth.storeRefreshToken(data.refreshToken);
      this.auth.storeToken(data.accessToken);
      req = req.clone({
        setHeaders: {Authorization:`Bearer ${data.accessToken}`}  
      })
      this.refresh=false;
      return next.handle(req);
    }),
    catchError((err)=>{
      if(err.error.status==0){
        localStorage.clear();
        sessionStorage.setItem('isConnected','false');
        this.router.navigateByUrl('login')
      }
      return throwError(()=>{
        
      })
    })
  )
}
}