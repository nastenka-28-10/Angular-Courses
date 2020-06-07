import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { CourseItemInterface } from 'app/interfaces/course-item-interface';
import { FilterByCourseNamePipe } from 'app/pipes/filter-by-course-name-pipe/filter-by-course-name.pipe';
import { CoursesDataService } from 'app/modules/courses-page/courses-data-service/courses-data.service';
import {LoadingSpinnerServiceService} from 'app/modules/core/loading-spinner-service.service';
import {HttpErrorResponse} from '@angular/common/http';

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
    private loadingSpinnerService: LoadingSpinnerServiceService
  ) {}

  ngOnInit(): void {
    this.coursesDataService.getCoursesList().subscribe((courses: CourseItemInterface[]) => {
      this.loadingSpinnerService.display(false);
      this.coursesNumber = courses.length;
    }, (error: HttpErrorResponse) => console.log(error));
    this.coursesDataService
      .getCoursesList(this.startForCoursesSearch, this.numberOfCoursesForLoading)
      .subscribe((coursesList) => {
        this.loadingSpinnerService.display(false);
        this.coursesListToShow = [...coursesList];
      }, (error: HttpErrorResponse) => console.log(error));
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

  onConfirmModalWindow() {
    this.coursesDataService.removeCourse(this.courseToDelete.id).subscribe(() => {
      this.loadingSpinnerService.display(false);
      this.updateCoursesListToShow(true);
    });
  }

  onCloseModalWindow(): void {
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
      .subscribe((coursesList) => {
        this.loadingSpinnerService.display(false);
        this.coursesListToShow = [...this.coursesListToShow, ...coursesList];
      }, (error: HttpErrorResponse) => console.log(error));
  }

  updateCoursesListToShow(isAfterCourseDelete = false): void {
    this.coursesDataService
      .getCoursesList(0, 0, this.courseNameToSearch)
      .subscribe((courses: CourseItemInterface[]) => {
        this.loadingSpinnerService.display(false);
        this.coursesNumber = courses.length;
      }, (error: HttpErrorResponse) => console.log(error));
    if (!isAfterCourseDelete) {
      this.startForCoursesSearch = 0;
      this.coursesShownNumber = 0;
      this.coursesDataService
        .getCoursesList(
          this.startForCoursesSearch,
          this.numberOfCoursesForLoading,
          this.courseNameToSearch,
        )
        .subscribe((coursesList: CourseItemInterface[]) => {
          this.loadingSpinnerService.display(false);
          this.coursesListToShow = coursesList;
          this.coursesShownNumber = coursesList.length;
        }, (error: HttpErrorResponse) => console.log(error));
    } else {
      this.coursesDataService
        .getCoursesList(0, this.coursesShownNumber, this.courseNameToSearch)
        .subscribe((coursesList: CourseItemInterface[]) => {
          this.loadingSpinnerService.display(false);
          this.coursesListToShow = coursesList;
          this.startForCoursesSearch = this.coursesShownNumber;
          this.coursesShownNumber = coursesList.length;
        }, (error: HttpErrorResponse) => console.log(error));
    }
  }
}
