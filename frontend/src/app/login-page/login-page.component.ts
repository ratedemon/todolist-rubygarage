import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {NewDataService} from '../shared/new-data.service';
import {Router} from '@angular/router';
import {Response} from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit{
  email: string = "";
  password: string = '';
  user: any;
  isSending: boolean = false;
  message:string = '';

  constructor(private router: Router, private authService: AuthService, private newDataService: NewDataService) { }

  ngOnInit(){
    localStorage.getItem('session_token') ? this.navToProjects() : null;
  }

  loginWithEmailAndPassword(mail, pass){
    this.isSending = true;
    this.authService.login(mail, pass).subscribe((res: Response) => {
      this.isSending = false;
      let token:string = res.json().token;
      this.newDataService.setToken(token);
      this.navToProjects();
    }, (err:HttpErrorResponse) => {
      this.isSending = false;
      console.log(err.status);
      if(err.status == 403){
        this.message = 'Password is not correct';
      }else if(err.status == 404){
        this.message = 'User is not found';
      }else{
        this.message = 'something went wrong';
      }
    });
  }
  private navToProjects(){
    this.router.navigate(['projects']);
  }
}
