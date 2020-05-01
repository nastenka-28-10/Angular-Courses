import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from './modules/core/core.module';
import {CoursesPageModule} from './modules/courses-page/courses-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CoursesPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
