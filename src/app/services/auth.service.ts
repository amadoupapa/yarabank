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
