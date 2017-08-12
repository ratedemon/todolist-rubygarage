import {Routes} from '@angular/router';
import {LoginPageComponent} from '../login-page/login-page.component';
import {RegisterPageComponent} from '../register-page/register-page.component';
import {ProjectPageComponent} from '../project-page/project-page.component';

export const appRouter: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'projects', component: ProjectPageComponent}
]