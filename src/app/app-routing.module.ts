import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesContainerComponent } from 'app/modules/courses-page/courses-container/courses-container.component';
import { LoginFormComponent } from 'app/modules/login-page/login-form/login-form.component';

const routes: Routes = [
  { path: 'courses', component: CoursesContainerComponent },
  { path: 'login', component: LoginFormComponent },
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
