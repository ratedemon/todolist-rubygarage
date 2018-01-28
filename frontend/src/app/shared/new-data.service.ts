import { Injectable } from '@angular/core';
// import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class NewDataService {
  token = localStorage.getItem('session_token') || null;
  private projects = new BehaviorSubject([]);
  projectList = this.projects.asObservable();
  private url = environment.apiUrl;
  constructor(private http: Http) {
    this.token = localStorage.getItem('session_token') || null;
  }
  setToken(token: string){
    localStorage.setItem('session_token', token);
    this.token = token;
  }
  getProjects(){
    this.http.get(`${this.url}/projects`, {headers:this.createAuthorizationHeader()}).map(this.parseData).subscribe(res=>{
      this.projects.next(res);
    }, err=>console.log(err));
  }
  renameProject(project_id, name){
    let body = JSON.stringify({project_id: project_id, name: name});
    return this.http.put(`${this.url}/project`, body, {headers: this.createAuthorizationHeader()});
  }
  deleteProject(project_id){
    return this.http.delete(`${this.url}/project/${project_id}`, {headers: this.createAuthorizationHeader()});
  }
  private createAuthorizationHeader(){
    let headers = new Headers();
    headers.append("Content-Type", "application/json" );
    headers.append('Authorization', `Bearer ${this.token}`);
    return headers;
  }
  private parseData(res:Response){
    let data = res.json();
    return data || [];
  }
}
