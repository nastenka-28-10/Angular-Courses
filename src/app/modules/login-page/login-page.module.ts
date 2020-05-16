import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from 'app/modules/login-page/login-form/login-form.component';
import { AppRoutingModule } from 'app/app-routing.module';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [CommonModule, FormsModule, AppRoutingModule],
})
export class LoginPageModule {}
