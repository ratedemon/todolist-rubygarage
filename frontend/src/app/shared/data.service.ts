import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Project} from './project';
import {Task} from './task';

@Injectable()
export class DataService {
  user: Observable<firebase.User>;
  items: Observable<Project[]>;
  // items: BehaviorSubject<Project[]>;
  private url = 'http://localhost:7000/';
  constructor(private afAuth: AngularFireAuth, private http: Http) {
    this.user = this.afAuth.authState;
    // this.user.subscribe(data=>this.postRegister(data).subscribe(data=>{
    //   console.log(data);
    // })
    // );
  }
  initUser(){
    return this.user;
  }
  getProjects(userObj: firebase.User){
    // return this.items;
    // this.items.
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.items = this.http.get(this.url+'api/'+userObj.uid, {headers: headers}).map(this.parseData);
  }
  initit(userObj: firebase.User){
    // let headers = new Headers();
    // this.createAuthorizationHeader(headers);
    // this.items = new Observable((observer)=>{

    // })
    // return this.items = this.http.get(this.url+'api/'+userObj.uid, {headers: headers}).map(this.parseData);
  }
  private createAuthorizationHeader(headers: Headers){
    headers.append("Content-Type", "application/json" ); 
  }
  private parseData(res:Response){
    let data = res.json();
    return data || [];
  }
  removeTask(project, task, person){
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    let fullUrl = this.url+'api/'+person.uid+ '/project/'+project+'/task/'+task;
    return this.http.delete(fullUrl, {headers: headers});
  }
  toggleTask(project, task, person: firebase.User){
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    let fullUrl = this.url + 'api/toggle';
    let body = {"status" : !task.done, name: person.uid, project: project, task: task};
    return this.http.put(fullUrl, body, {headers: headers});
  }
  rewriteTask(project:Project, task, newTitle, person: firebase.User){
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    let fullUrl = this.url + 'api/task/update';
    let body = JSON.stringify({'task' : newTitle, 'name' : person.uid, 'project': project.title, 'taskName' : task.text});
    return this.http.put(fullUrl, body, {headers: headers});
  }
  addTask(titleTask, project: Project, person: firebase.User){
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    let fullUrl = this.url + 'api/task';
    let body = JSON.stringify({'task' : titleTask, 'name': person.uid, 'project': project.title});
    return this.http.post(fullUrl, body, {headers: headers});
  }
  rewriteProject(person: firebase.User, project: Project, newTitle){
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    let fullUrl = this.url + 'api/project/update';
    console.log(person);
    let body = JSON.stringify({
      'project': newTitle,
      'name' : person.uid,
      'projectName' : project.title
    });
    return this.http.put(fullUrl, body, {headers: headers});
  }
  removeProject(person: firebase.User, project: Project){
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    let fullUrl = this.url + 'api/'+ person.uid +'/project/' + project.title;
    return this.http.delete(fullUrl, {headers: headers});
  }
  createProject(title, person: firebase.User){
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    let fullUrl = this.url + 'api/project';
    let body = JSON.stringify({
      'name' : person.uid,
      'project' : title
    });
    return this.http.post(fullUrl, body, {headers: headers})
  }
}
