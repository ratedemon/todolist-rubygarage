import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule, Http} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import { AppComponent } from './app.component';
import {DataService} from './shared/data.service';
import {LoginService} from './shared/login.service';
import { AuthService } from './shared/auth.service';
import { NewDataService } from './shared/new-data.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

import {firebaseConfig} from './shared/firebase.config';
import {appRouter} from './shared/routes';
import { ProjectPageComponent } from './project-page/project-page.component';
import { TodoProjectComponent } from './todo-project/todo-project.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoProjectsFormComponent } from './todo-projects-form/todo-projects-form.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { TodoProjectHeaderComponent } from './todo-project-header/todo-project-header.component';
import {createTranslateLoader} from './shared/translateLoader';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ProjectPageComponent,
    TodoProjectComponent,
    TodoFormComponent,
    TodoProjectsFormComponent,
    TodoTaskComponent,
    TodoProjectHeaderComponent
  ],
  imports: [
    BrowserModule, AngularFireModule.initializeApp(firebaseConfig.firebase), AngularFireAuthModule, AngularFireDatabaseModule, RouterModule.forRoot(appRouter), FormsModule, HttpModule, BrowserAnimationsModule, TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }), HttpClientModule
  ],
  exports:[
    TranslateModule
  ],
  providers: [DataService, LoginService, AuthService, NewDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
