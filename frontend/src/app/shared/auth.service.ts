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
      this.createHeaders(headers);
      let body = JSON.stringify({'email' : email, 'password' : password});
      return this.http.post(`${this.url}/login`, body, {headers: headers});
  }
  register(name: string, email: string, password: string){
      let headers = new Headers();
      this.createHeaders(headers);
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
      this.createHeaders(headers);
      let body = JSON.stringify({email: email});
      return this.http.post(`${this.url}/secret-code`, body, {headers: headers});
  }
  forgotCode(email:string, secret:string, password: string){
      let headers = new Headers();
      this.createHeaders(headers);
      let body = JSON.stringify({email: email, secret: secret, password: password});
      return this.http.post(`${this.url}/forgot`, body, {headers: headers});
  }
  updatePassword(old_password:string, new_password: string){
      let body = JSON.stringify({old_password: old_password, new_password: new_password});
      return this.http.put(`${this.url}/change-password`, body, {headers: this.createAuthorizationHeaders()})
  }
  private createHeaders(headers: Headers){
      headers.append("Content-Type", "application/json" );
  }
  private createAuthorizationHeaders(){
      let headers = new Headers();
      headers.append("Content-Type", "application/json" );
      headers.append('Authorization', `Bearer ${localStorage.getItem('session_token')}`);
      return headers;
  }
}
