import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchCourseComponent } from './search-course/search-course.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CoursesContainerComponent } from './courses-container/courses-container.component';
import { CourseBorderDirective } from './course-border/course-border.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'app/modules/core/core.module';
import { OrderByPipe } from 'app/pipes/order-by-pipe/order-by.pipe';
import { FilterByCourseNamePipe } from 'app/pipes/filter-by-course-name-pipe/filter-by-course-name.pipe';
import { CourseEditorComponent } from 'app/modules/courses-page/course-editor/course-editor.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { CoursesContentComponent } from 'app/modules/courses-page/courses-content/courses-content.component';
import { DateInputComponent } from 'app/modules/courses-page/date-input/date-input.component';
import { ValidateDateDirective } from 'app/modules/courses-page/validate-date/validate-date.directive';
import { DurationInputComponent } from 'app/modules/courses-page/duration-input/duration-input.component';
import { ValidateDurationDirective } from 'app/modules/courses-page/validate-duration/validate-duration.directive';
import { AuthorsInputComponent } from 'app/modules/courses-page/authors-input/authors-input.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    SearchCourseComponent,
    CoursesListComponent,
    CourseItemComponent,
    CoursesContainerComponent,
    CourseBorderDirective,
    OrderByPipe,
    FilterByCourseNamePipe,
    CourseEditorComponent,
    CoursesContentComponent,
    CoursesContentComponent,
    DateInputComponent,
    ValidateDateDirective,
    DurationInputComponent,
    ValidateDurationDirective,
    AuthorsInputComponent,
  ],
  imports: [CommonModule, FormsModule, CoreModule, AppRoutingModule, ReactiveFormsModule],
  exports: [CoursesContainerComponent, CourseEditorComponent, CoursesContentComponent],
})
export class CoursesPageModule {}
