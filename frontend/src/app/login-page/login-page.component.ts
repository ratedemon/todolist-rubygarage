import { Component, OnInit } from '@angular/core';
import {DataService} from '../shared/data.service';
import {LoginService} from '../shared/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private dataService: DataService, private loginService: LoginService, private router: Router) { }
  email: string = "";
  password: string = '';
  user: any;
  ngOnInit() {
    this.dataService.initUser().subscribe(data=>{this.user=data;
    console.log(this.user);
    if(this.user !== null){
      this.navToProjects();
    }
  });
  }
  loginGoogle(){
    this.loginService.loginGoogle();
  }
  loginFacebook(){
    this.loginService.loginFacebook();
  }
  loginTwitter(){
    this.loginService.loginTwitter();
  }
  loginGithub(){
    this.loginService.loginGithub();
  }
  loginWithEmailAndPassword(mail, pass){
    this.loginService.loginEmailAndPassword(mail, pass);
  }
  private navToProjects(){
    this.router.navigate(['projects']);
  }
}
