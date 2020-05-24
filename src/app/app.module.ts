import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { CoursesPageModule } from './modules/courses-page/courses-page.module';
import { LoginPageModule } from 'app/modules/login-page/login-page.module';
import {AuthTokenInterceptor} from 'app/modules/core/auth-token.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    CoursesPageModule,
    LoginPageModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
