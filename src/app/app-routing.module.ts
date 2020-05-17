import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesContainerComponent } from 'app/modules/courses-page/courses-container/courses-container.component';
import { LoginFormComponent } from 'app/modules/login-page/login-form/login-form.component';
import { CourseEditorComponent } from 'app/modules/courses-page/course-editor/course-editor.component';
import { CoursesContentComponent } from 'app/modules/courses-page/courses-content/courses-content.component';
import { PageNotFoundComponent } from 'app/modules/core/page-not-found/page-not-found.component';
import {CanActivateGuard} from 'app/modules/login-page/can-activate.guard';

const routes: Routes = [
  {
    path: 'courses',
    component: CoursesContainerComponent,
    canActivate: [CanActivateGuard],
    children: [
      {
        path: 'new',
        component: CourseEditorComponent,
        canActivate: [CanActivateGuard]
      },
      {
        path: ':id',
        component: CourseEditorComponent,
        canActivate: [CanActivateGuard]
      },
      {
        path: '',
        component: CoursesContentComponent,
      },
    ],
  },
  { path: 'login', component: LoginFormComponent },
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
