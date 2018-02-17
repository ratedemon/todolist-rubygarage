import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';
import { ValidatorFn, AbstractControl, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  registerForm : FormGroup;

  isSending: boolean = false;
  message: string = "";
  status:number = 0;
  constructor(private router: Router, private authService: AuthService) {
    this.registerForm = new FormGroup({
      "email" : new FormControl("", [Validators.required, Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")]),
      "name" : new FormControl("", [Validators.required, Validators.minLength(2)]),
      // "passwords" : new FormGroup({
      //   "password" : new FormControl("", [Validators.required, Validators.minLength(6)]),
      //   "repeat_password" : new FormControl("", [Validators.required, Validators.minLength(6)])
      // }, {validator: this.passwordConfirming})
      "password" : new FormControl("", [Validators.required, Validators.minLength(6)]),
      "repeat_password" : new FormControl("", [Validators.required, Validators.minLength(6)])
    }, this.passwordMatchValidator);
  }

  ngOnInit() {
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('repeat_password').value ? null : {'mismatch': true};
  }

  loginForm(){
    console.log(this.registerForm);
    // return;
    // this.isSending = true;
    this.authService.register(this.registerForm.value.name, this.registerForm.value.email, this.registerForm.value.password).subscribe(res => {
      this.isSending = false;
      this.registerForm.reset();
      this.message = "All OK! You can come in!";
      // console.log(res);
      this.status = 1;
      setTimeout(()=>{
        this.router.navigate(['']);
      }, 5000);
    },err=>{
      this.isSending = false;
      this.message = "This email has been registered";
      this.status = 2;
      console.log(err);
    });
  }
}
