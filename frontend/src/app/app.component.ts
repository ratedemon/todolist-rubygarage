import { Component } from '@angular/core';
import {LoginService} from './shared/login.service';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private loginService: LoginService, private router: Router, private translate: TranslateService){
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
  }

  logout(){
    this.loginService.logout().then(data=>{
      this.router.navigate(['']);
    })

  }
}
