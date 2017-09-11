import {TranslateHttpLoader} from '@ngx-translate/http-loader';
// import {TranslateLoader} from '@ngx-translate/core';
// import { HttpModule, Http } from '@angular/http';
import {HttpClient} from '@angular/common/http';


export function createTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}