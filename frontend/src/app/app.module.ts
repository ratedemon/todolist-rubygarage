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
import { AuthService } from './shared/auth.service';
import { NewDataService } from './shared/new-data.service';

import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

import {appRouter} from './shared/routes';
import { ProjectPageComponent } from './project-page/project-page.component';
import { TodoProjectComponent } from './todo-project/todo-project.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoProjectsFormComponent } from './todo-projects-form/todo-projects-form.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { TodoProjectHeaderComponent } from './todo-project-header/todo-project-header.component';
import {createTranslateLoader} from './shared/translateLoader';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

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
    TodoProjectHeaderComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRouter), FormsModule, HttpModule, BrowserAnimationsModule, TranslateModule.forRoot({
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
  providers: [AuthService, NewDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
