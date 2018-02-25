import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  email: string = "";
  forgotForm: FormGroup;
  secretCodeForm: FormGroup;
  secret: string = "";
  new_password: string = "";
  confirm_password: string = "";
  errorMessage:string = "";
  successMessage:string = "";
  status: boolean = false;
  constructor(private authService: AuthService, private router: Router) {
    this.forgotForm = new FormGroup({
      "email": new FormControl("", [Validators.required,Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")])
    });
    this.secretCodeForm = new FormGroup({
      "secret" : new FormControl("", [Validators.required, Validators.minLength(20)]),
      "new_password" : new FormControl("", [Validators.required, Validators.minLength(6)]),
      "confirm_password" : new FormControl("", [Validators.required, Validators.minLength(6)])
    }, this.passwordMatchValidator);
  }

  ngOnInit() {
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('new_password').value === g.get('confirm_password').value ? null : {'mismatch': true};
  }

  getSecretCode(){
    this.successMessage = '';
    this.errorMessage = '';
    this.authService.forgotPassword(this.forgotForm.value.email).subscribe(res=>{
      console.log(res);
      this.successMessage = "Good, check you email now, there will be a secret code!";
      if(!this.status){
        this.status = true;
      }
    }, err=>{
      this.errorMessage = "Error! Something went wrong...";
    });
  }

  forgotPassword(){
    this.successMessage = '';
    this.errorMessage = '';
    const self = this;
    this.authService.forgotCode(this.forgotForm.value.email, this.secretCodeForm.value.secret, this.secretCodeForm.value.new_password).subscribe(res=>{
      console.log(res);
      this.successMessage = "Good, check you email now! You had get the new password!";
      setTimeout(()=>{
        self.router.navigate(['/']);
      }, 2500);
    }, err=>{
      this.errorMessage = "Error! Something went wrong...";
    });
  }
}
