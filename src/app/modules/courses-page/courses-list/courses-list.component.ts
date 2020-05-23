import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { CourseItemInterface } from 'app/interfaces/course-item-interface';
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
  coursesList: CourseItemInterface[] = [];
  coursesListToShow: CourseItemInterface[] = [];
  courseToDelete: CourseItemInterface | null;
  isModalOpen = false;
  coursesNumber: number;
  coursesShownNumber = 5;
  numberOfCoursesForLoading = 5;
  startForCoursesSearch = 0;

  constructor(
    private filterByCourseNamePipe: FilterByCourseNamePipe,
    private coursesDataService: CoursesDataService,
  ) {}

  ngOnInit(): void {
    this.coursesDataService.getCoursesList().then((courses: CourseItemInterface[]) => {
      this.coursesNumber = courses.length;
    });
    this.coursesDataService
      .getCoursesList(this.startForCoursesSearch, this.numberOfCoursesForLoading)
      .then((coursesList) => {
        this.coursesList = coursesList;
        this.coursesListToShow = [...coursesList];
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.courseNameToSearch && !changes.courseNameToSearch.firstChange) {
      this.updateCoursesListToShow();
    }
  }

  onClickDeleteCourse(deletedCourse: CourseItemInterface): void {
    this.courseToDelete = deletedCourse;
    this.isModalOpen = true;
  }

  async onConfirmModalWindow() {
    await this.coursesDataService.removeCourse(this.courseToDelete.id);
    this.updateCoursesListToShow();
  }

  onCloseModalWindow() {
    this.isModalOpen = false;
    this.courseToDelete = null;
  }

  onClickLoadMore(): void {
    this.startForCoursesSearch = this.coursesShownNumber;
    this.coursesShownNumber += this.numberOfCoursesForLoading;
    this.coursesDataService
      .getCoursesList(
        this.startForCoursesSearch,
        this.numberOfCoursesForLoading,
        this.courseNameToSearch,
      )
      .then((coursesList) => {
        // this.coursesList = coursesList;
        this.coursesListToShow = [...this.coursesListToShow, ...coursesList];
      });
  }

  updateCoursesListToShow() {
    this.startForCoursesSearch = 0;
    this.coursesShownNumber = 0;
    this.coursesDataService
      .getCoursesList(0, 0, this.courseNameToSearch)
      .then((courses: CourseItemInterface[]) => (this.coursesNumber = courses.length));
    this.coursesDataService
      .getCoursesList(
        this.startForCoursesSearch,
        this.numberOfCoursesForLoading,
        this.courseNameToSearch,
      )
      .then((coursesList: CourseItemInterface[]) => {
        this.coursesListToShow = coursesList;
        this.coursesShownNumber = coursesList.length;
      });
  }
}
