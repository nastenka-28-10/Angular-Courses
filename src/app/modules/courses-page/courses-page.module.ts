import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchCourseComponent } from './search-course/search-course.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CoursesContainerComponent } from './courses-container/courses-container.component';
import { CourseBorderDirective } from './course-border/course-border.directive';
import { FormsModule } from '@angular/forms';
import {CoreModule} from 'app/modules/core/core.module';
import { OrderByPipe } from 'app/modules/courses-page/order-by-pipe/order-by.pipe';
import { FilterByCourseNamePipe } from 'app/modules/courses-page/filter-by-course-name-pipe/filter-by-course-name.pipe';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    SearchCourseComponent,
    CoursesListComponent,
    CourseItemComponent,
    CoursesContainerComponent,
    CourseBorderDirective,
    OrderByPipe,
    FilterByCourseNamePipe
  ],
  imports: [CommonModule, FormsModule, CoreModule],
  exports: [CoursesContainerComponent],
})
export class CoursesPageModule {}
