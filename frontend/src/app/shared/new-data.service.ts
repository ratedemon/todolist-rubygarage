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
  createProject(name){
    let body = JSON.stringify({name: name});
    return this.http.post(`${this.url}/project`, body, {headers: this.createAuthorizationHeader()}).map(this.parseData);
  }
  renameProject(project_id: number, name: string){
    let body = JSON.stringify({project_id: project_id, name: name});
    return this.http.put(`${this.url}/project`, body, {headers: this.createAuthorizationHeader()});
  }
  deleteProject(project_id: number){
    return this.http.delete(`${this.url}/project/${project_id}`, {headers: this.createAuthorizationHeader()});
  }
  addTask(name: string, project_id: number){
    let body = JSON.stringify({name: name, project_id: project_id});
    return this.http.post(`${this.url}/task`, body, {headers: this.createAuthorizationHeader()});
  }
  toggleTask(project, task){
    let body = JSON.stringify({status: !task.status, project_id: project.id, task_id: task.id});
    return this.http.put(`${this.url}/task/status`, body, {headers: this.createAuthorizationHeader()});
  }
  removeTask(project, task){
    return this.http.delete(`${this.url}/project/${project.id}/task/${task.id}`, {headers: this.createAuthorizationHeader()});
  }
  renameTask(project, task, name){
    let body = JSON.stringify({name: name, task_id: task.id, project_id: project.id});
    return this.http.put(`${this.url}/task`, body, {headers: this.createAuthorizationHeader()});
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
