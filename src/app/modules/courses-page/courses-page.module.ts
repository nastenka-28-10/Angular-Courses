import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchCourseComponent } from './search-course/search-course.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CoursesContainerComponent } from './courses-container/courses-container.component';
import { CourseBorderDirective } from './course-border/course-border.directive';
import { FormsModule } from '@angular/forms';
import { CoreModule } from 'app/modules/core/core.module';
import { OrderByPipe } from 'app/pipes/order-by-pipe/order-by.pipe';
import { FilterByCourseNamePipe } from 'app/pipes/filter-by-course-name-pipe/filter-by-course-name.pipe';
import { CourseEditorComponent } from 'app/modules/courses-page/course-editor/course-editor.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { CoursesContentComponent } from 'app/modules/courses-page/courses-content/courses-content.component';

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
  ],
  imports: [CommonModule, FormsModule, CoreModule, AppRoutingModule],
  exports: [CoursesContainerComponent, CourseEditorComponent, CoursesContentComponent],
})
export class CoursesPageModule {}
