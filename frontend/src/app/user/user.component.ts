import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  old_password:string = '';
  new_password:string = '';
  repeat_password: string = '';
  errorMessage: string = '';
  successMessage: string = '';
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  updatePassword(old_password, new_password){
    this.errorMessage = '';
    this.successMessage = '';
    this.authService.updatePassword(old_password, new_password).subscribe(res=>{
      console.log(res);
      this.old_password = '';
      this.new_password = '';
      this.repeat_password = '';
      this.successMessage = 'Your password has been changed!';
    }, err=>{
      this.errorMessage = 'Error, please, try later.'
    });
  }

}
