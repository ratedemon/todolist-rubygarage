import { Injectable } from '@angular/core';
// import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable()
export class NewDataService {
  token = localStorage.getItem('session_token') || null;
  private projects = new BehaviorSubject([]);
  projectList = this.projects.asObservable();
  private url = environment.apiUrl;
  constructor(private http: Http, private router: Router) {
    this.token = localStorage.getItem('session_token') || null;
  }
  setToken(token: string){
    localStorage.setItem('session_token', token);
    this.token = token;
  }
  getProjects(){
    this.http.get(`${this.url}/user-projects`, {headers:this.createAuthorizationHeader()}).map(this.parseData).subscribe(res=>{
      this.projects.next(res);
    }, err=>{
      localStorage.clear();
      this.router.navigate(['']);
    });
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
  addTask(name: string, project_id: number, position: number){
    let body = JSON.stringify({name: name, project_id: project_id, position: position});
    return this.http.post(`${this.url}/task`, body, {headers: this.createAuthorizationHeader()}).map(this.parseData);
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
  changePosition(tasks, project_id){
    // let formData = new FormData();
    // tasks.forEach((el, i)=>{
    //   formData.append(`task[${i}][id]`, el.id);
    //   formData.append(`task[${i}][position]`, el.position);
    // });
    // formData.append('project_id', project_id);
    let body = JSON.stringify({tasks: tasks, project_id: project_id});
    return this.http.put(`${this.url}/task/position`, body, {headers: this.createAuthorizationHeader()});
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
