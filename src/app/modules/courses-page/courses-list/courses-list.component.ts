import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { CourseItem } from 'app/interfaces/course-item';
import { FilterByCourseNamePipe } from 'app/pipes/filter-by-course-name-pipe/filter-by-course-name.pipe';
import { CoursesDataService } from 'app/modules/courses-page/courses-data-service/courses-data.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [FilterByCourseNamePipe],
})
export class CoursesListComponent implements OnInit, OnChanges {
  @Input() courseNameToSearch: string;
  coursesList: CourseItem[] = [];
  coursesListToShow: CourseItem[] = [];
  courseToDelete: CourseItem | null;
  isModalOpen = false;

  constructor(
    private filterByCourseNamePipe: FilterByCourseNamePipe,
    private coursesDataService: CoursesDataService,
  ) {}

  ngOnInit(): void {
    this.coursesList = this.coursesDataService.getCoursesList();
    this.coursesListToShow = [...this.coursesList];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.courseNameToSearch) {
      this.updateCoursesListToShow();
    }
  }

  onClickDeleteCourse(deletedCourse: CourseItem): void {
    this.courseToDelete = deletedCourse;
    this.isModalOpen = true;
  }

  onConfirmModalWindow() {
    this.coursesDataService.removeItem(this.courseToDelete.id);
    this.updateCoursesListToShow();
  }

  onCloseModalWindow() {
    this.isModalOpen = false;
    this.courseToDelete = null;
  }

  onClickLoadMore(): void {
    console.log('Load more button pressed');
  }

  updateCoursesListToShow() {
    this.coursesListToShow = this.filterByCourseNamePipe.transform(
      this.coursesList,
      this.courseNameToSearch,
    );
  }
}
