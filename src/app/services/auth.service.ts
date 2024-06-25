import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TokenApiModel } from '../model/TokenApiModel/TokenApiModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
    
  }
  authentication(login: any): Observable<any> {
    return this.http.post<any>(environment.apiUrl + 'signIn', login)

  }
  getCourantloste(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + 'accounts/COURANT')

  }
  getSuggestion(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + 'suggestions')

  }
  activation(id:any): Observable<any> {
    return this.http.get<any>(environment.apiUrl + 'accountActivation/'+id)

  }

  createExitCustomer(customer:any): Observable<any> {
    
    return this.http.get<any>(environment.apiUrl + 'createCustomerExist/'+customer.idAccount+"/"+customer.accountType)

  }


  
  suggestion(suggestion:any): Observable<any> {
    return this.http.post<any>(environment.apiUrl + 'suggestion',suggestion)

  }
  getEpargneloste(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + 'accounts/EPARGNE')

  }

  getOperation(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + 'liste')

  }

  getMyOperation(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + 'myliste')

  }

  getbalance(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + 'balance')

  }

  createCustomer(form: any): Observable<any> {
    return this.http.post<any>(environment.apiUrl + 'createCustomer', form)

  }
  createCustomerEntreprise(form: any): Observable<any> {
    return this.http.post<any>(environment.apiUrl + 'createEntreprise', form)

  }

  signout(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + 'signOut')
  }

  storeToken(tokenValue: string) {
    localStorage.setItem('accessToken', tokenValue)
  }
  storeRefreshToken(tokenValue: string) {
    localStorage.setItem('refreshToken', tokenValue)
  }
  refreshToken(token: TokenApiModel): Observable<TokenApiModel> {
    return this.http.post<TokenApiModel>(environment.apiUrl + 'refreshToken', token)
  }

  getAccessToken() {
    return localStorage.getItem('accessToken')
  }
  getRefreshToken() {
    return localStorage.getItem('refreshToken')
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('accessToken')
  }
}
