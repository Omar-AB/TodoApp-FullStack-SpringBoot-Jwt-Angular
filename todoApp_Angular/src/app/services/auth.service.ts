import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAutenticated = null;

  constructor(private http: HttpClient) { }

  SignInWithUsernameAndPassword(username, password) {

    return this.http.post("http://localhost:9090/login", {username, password})

  }

  UserIsAutenticated() {
    this.isAutenticated = !! localStorage.getItem('token');
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) { return null; }

    const date = new Date(0); 
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if(!token) { token = this.getToken(); }
    if(!token) { return true; }

    const date = this.getTokenExpirationDate(token);
    if(date === undefined) { return false; }
    return !(date.valueOf() > new Date().valueOf());
  }

}
