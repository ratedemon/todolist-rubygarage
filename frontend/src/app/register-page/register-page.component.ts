import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  fullName: string = "";
  email: string = "";
  password: string = "";
  repeatPassword: string = "";
  isSending: boolean = false;
  message: string = "";
  status:number = 0;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }
  loginForm(name:string, mail:string, pass:string){
    this.isSending = true;
    this.authService.register(name, mail, pass).subscribe(res => {
      this.isSending = false;
      this.fullName = "";
      this.email = "";
      this.password = "";
      this.repeatPassword = "";
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
