import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CoursesDataService } from 'app/modules/courses-page/courses-data-service/courses-data.service';
import {HttpErrorResponse} from '@angular/common/http';
import {LoadingSpinnerServiceService} from 'app/modules/core/loading-spinner-service.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  public courseItem = null;
  public newCourseModeTitleForBreadcrumbs: string | null = null;

  constructor(
    private router: Router,
    private coursesDataService: CoursesDataService,
    private loadingSpinnerService: LoadingSpinnerServiceService
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const urlParts = event.urlAfterRedirects.split('/').slice(1);

        if (urlParts.length > 1) {
          const secondUrlPart = urlParts[1];
          if (!isNaN(+secondUrlPart) && typeof +secondUrlPart === 'number') {
            this.newCourseModeTitleForBreadcrumbs = null;
            this.coursesDataService.getCourseById(+secondUrlPart).subscribe((courseItem) => {
              this.loadingSpinnerService.display(false);
              this.courseItem = courseItem ? courseItem : null;
            }, (error: HttpErrorResponse) => console.log(error));
          } else if (secondUrlPart === 'new') {
            this.courseItem = null;
            this.newCourseModeTitleForBreadcrumbs = 'New course';
          }
        } else {
          this.courseItem = null;
          this.newCourseModeTitleForBreadcrumbs = null;
        }
      }
    });
  }
}
