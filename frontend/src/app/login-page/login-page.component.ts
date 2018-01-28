import { Component } from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {NewDataService} from '../shared/new-data.service';
import {Router} from '@angular/router';
import {Response} from '@angular/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent{

  constructor(private router: Router, private authService: AuthService, private newDataService: NewDataService) { }
  email: string = "";
  password: string = '';
  user: any;
  isSending: boolean = false;

  loginWithEmailAndPassword(mail, pass){
    this.isSending = true;
    this.authService.login(mail, pass).subscribe((res: Response) => {
      this.isSending = false;
      let token:string = res.json().token;
      console.log(token);
      this.newDataService.setToken(token);
      this.navToProjects();
    }, err => console.log(err));
  }
  private navToProjects(){
    this.router.navigate(['projects']);
  }
}
