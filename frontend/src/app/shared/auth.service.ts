import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { environment } from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private url = environment.apiUrl;
  constructor(private http: Http) { }
  login(email: string, password: string){
      let headers = new Headers();
      this.createAuthorizationHeader(headers);
      let body = JSON.stringify({'email' : email, 'password' : password});
      return this.http.post(`${this.url}/login`, body, {headers: headers});
  }
  register(name: string, email: string, password: string){
      let headers = new Headers();
      this.createAuthorizationHeader(headers);
      let body = JSON.stringify({'name': name,'email' : email, 'password' : password});
      return this.http.post(`${this.url}/register`, body, {headers: headers});
  }
  logout(){
      return new Promise((resolve, reject) => {
        localStorage.clear();
        resolve(true);
      });
  }
  forgotPassword(email: string){
      let headers = new Headers();
      this.createAuthorizationHeader(headers);
      let body = JSON.stringify({email: email});
      return this.http.post(`${this.url}/forgot`, body, {headers: headers});
  }
  private createAuthorizationHeader(headers: Headers){
      headers.append("Content-Type", "application/json" );
  }
}
