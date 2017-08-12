import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Http, Headers} from '@angular/http';

@Injectable()
export class LoginService {
  constructor(private afAuth: AngularFireAuth, private http: Http) { }
  registerUser(name: string, email: string, password: string){
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(user=>{
      firebase.auth().currentUser.updateProfile({displayName: name, photoURL: ''});
    }).catch(err=>this.handleError(err));
  }
  loginGoogle(){
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(data=>{
        console.log(data);
    }).catch(err=>this.handleError(err));
  }
  loginGithub(){
    let githubUser = new firebase.auth.GithubAuthProvider();
    githubUser.addScope('repo');
    return this.afAuth.auth.signInWithPopup(githubUser).then(data=>{
      console.log(data);
    }).catch(err=>this.handleError(err));
  }
  loginFacebook(){
    let facebookUser = new firebase.auth.FacebookAuthProvider();
    facebookUser.addScope('user_birthday');
    return this.afAuth.auth.signInWithPopup(facebookUser).then(data=>{
      console.log(data);
    }).catch(err=>this.handleError(err));
  }
  loginTwitter(){
    let twitterUser = new firebase.auth.TwitterAuthProvider();
    twitterUser.setCustomParameters({
      lang: 'ru'
    });
    return this.afAuth.auth.signInWithPopup(twitterUser).then(data=>{
        console.log(data);
    }, err=> this.handleError(err));;
  }
  loginEmailAndPassword(email:string, password: string){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then(data=>{
      console.log(data);
      }).catch(err=>this.handleError(err));
  }
  logout(){
    return this.afAuth.auth.signOut()
  }
  private handleError(err: Error){
    console.log(err.name, err.message);
  }
  // sendToDB(person){
  //   let headers = new Headers();
  //   headers.append("Content-Type", "application/json" ); 
  //   let body = JSON.stringify({'uid' : person.uid});
  //   let fullUrl = this.url + 'api/register';
  //   return this.http.post(fullUrl, body, {headers: headers});
  // }
}
