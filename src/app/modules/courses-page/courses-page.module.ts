import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchCourseComponent } from './search-course/search-course.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CoursesContainerComponent } from './courses-container/courses-container.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    SearchCourseComponent,
    CoursesListComponent,
    CourseItemComponent,
    CoursesContainerComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [CoursesContainerComponent],
})
export class CoursesPageModule {}
