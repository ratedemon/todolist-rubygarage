import { Component, OnInit } from '@angular/core';
import {DataService} from '../shared/data.service';
import {AuthService} from '../shared/auth.service';
import {LoginService} from '../shared/login.service';
import {Router} from '@angular/router';
import {Response} from '@angular/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private dataService: DataService, private loginService: LoginService, private router: Router, private authService: AuthService) { }
  email: string = "";
  password: string = '';
  user: any;
  isSending: boolean = false;

  ngOnInit() {
  //   this.dataService.initUser().subscribe(data=>{this.user=data;
  //   console.log(this.user);
  //   if(this.user !== null){
  //     this.navToProjects();
  //   }
  // });
  }
  loginWithEmailAndPassword(mail, pass){
    // this.loginService.loginEmailAndPassword(mail, pass);
    this.isSending = true;
    this.authService.login(mail, pass).subscribe((res: Response) => {
      this.isSending = false;
      let token:string = res.json().token;
      console.log(token);
      this.authService.setToken(token);
      this.navToProjects();
    }, err => console.log(err));
  }
  private navToProjects(){
    this.router.navigate(['projects']);
  }
}
