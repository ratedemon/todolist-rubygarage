import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/auth.service';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  email: string = "";
  errorMessage:string = "";
  successMessage:string = "";
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  forgotPassword(email){
    this.successMessage = '';
    this.errorMessage = '';
    this.authService.forgotPassword(email).subscribe(res=>{
      console.log(res);
      this.successMessage = "Good, check you email now!";
    }, err=>{
      this.errorMessage = "Error! Something went wrong...";
    });
  }
}
