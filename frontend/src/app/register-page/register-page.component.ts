import { Component, OnInit } from '@angular/core';
import {LoginService} from '../shared/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  private fullName: string = "";
  private email: string = "";
  private password: string = "";
  private repeatPassword: string = "";
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }
  loginForm(name, mail, pass){
    this.loginService.registerUser(name, mail, pass).then(data=>{
      this.fullName = "";
      this.email = "";
      this.password = "";
      this.repeatPassword = "";
      this.router.navigate(['']);
    }).catch(err=>console.log(`Error: ${err}`));
  }
}
