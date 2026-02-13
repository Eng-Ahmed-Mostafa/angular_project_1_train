import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../apiRoot/baseUrl';
import { IRegister } from '../Interfaces/iregister';
import { ILogin } from '../Interfaces/ilogin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private _httpClient:HttpClient) {}

  register(registerData:IRegister): Observable<any> {
    return this._httpClient.post(`${baseUrl}/users`,registerData);
  }

  login(loginData:ILogin): Observable<any> {
    return this._httpClient.post(`${baseUrl}/auth/login`,loginData);
  }

  authoriezed(): boolean {
    if(localStorage.getItem('token') != null) {
      return true;
    }
    return false;
  }

  logout(): Observable<any> {
    return this._httpClient.post(`${baseUrl}/api/users/logout`,{});
  }
}
