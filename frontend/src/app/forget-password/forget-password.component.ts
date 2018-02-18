import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/auth.service';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  email: string = "";
  secret: string = "";
  errorMessage:string = "";
  successMessage:string = "";
  status: boolean = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  forgotPassword(email, secret){
    this.successMessage = '';
    this.errorMessage = '';
    if(!this.status){
      this.authService.forgotPassword(email).subscribe(res=>{
        console.log(res);
        this.successMessage = "Good, check you email now, there will be a secret code!";
      }, err=>{
        this.errorMessage = "Error! Something went wrong...";
      });
    }else{
      this.authService.forgotCode(email, secret).subscribe(res=>{
        console.log(res);
        this.successMessage = "Good, check you email now! You had get the new password!";
      }, err=>{
        this.errorMessage = "Error! Something went wrong...";
      });
    }
    if(!this.status){
      this.status = true;
    }
  }
}
