import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {NewDataService} from '../shared/new-data.service';
import {Router} from '@angular/router';
import {Response} from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit{
  loginForm: FormGroup;

  email: string = "";
  password: string = '';
  user: any;
  isSending: boolean = false;
  message:string = '';

  constructor(private router: Router, private authService: AuthService, private newDataService: NewDataService) {
    this.loginForm = new FormGroup({
      "email": new FormControl("", [Validators.required, Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")]),
      "password" : new FormControl("", [Validators.required, Validators.minLength(6)])
    })
  }

  ngOnInit(){
    localStorage.getItem('session_token') ? this.navToProjects() : null;
  }

  loginSubmit(){
    console.log(this.loginForm);
    this.isSending = true;
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((res: Response) => {
      this.isSending = false;
      let token:string = res.json().token;
      this.newDataService.setToken(token);
      this.navToProjects();
    }, (err:HttpErrorResponse) => {
      this.isSending = false;
      if(err.status == 403){
        this.message = 'Password is not correct';
      }else if(err.status == 404){
        this.message = 'User is not found';
      }else{
        this.message = 'Something went wrong...';
      }
    });
  }
  private navToProjects(){
    this.router.navigate(['projects']);
  }
}
