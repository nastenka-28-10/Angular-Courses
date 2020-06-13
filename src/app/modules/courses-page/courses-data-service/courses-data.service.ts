import { Injectable } from '@angular/core';
import { CourseItemInterface } from 'app/interfaces/course-item-interface';
import { HttpClient } from '@angular/common/http';
import { LoadingSpinnerServiceService } from 'app/modules/core/loading-spinner-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesDataService {
  constructor(
    private http: HttpClient,
    private loadingSpinnerService: LoadingSpinnerServiceService,
  ) {}

  private BASE_URL = `http://localhost:3004`;

  getCoursesList(start?: number, count?: number, textFragment = ''): Observable<any> {
    this.loadingSpinnerService.display(true);

    if (!start && !count) {
      return textFragment
        ? this.http.get(`${this.BASE_URL}/courses?textFragment=${textFragment}`)
        : this.http.get(`${this.BASE_URL}/courses`);
    }

    return this.http.get(
      `${this.BASE_URL}/courses?start=${start}&count=${count}&textFragment=${textFragment}`,
    );
  }

  getCourseById(id: number): Observable<any> {
    this.loadingSpinnerService.display(true);
    return this.http.get(`${this.BASE_URL}/courses/${id}`);
  }

  createCourse(newCourse: CourseItemInterface): Observable<any> {
    this.loadingSpinnerService.display(true);
    return this.http.post(`${this.BASE_URL}/courses`, newCourse);
  }

  updateCourse(updatedCourse: CourseItemInterface): Observable<any> {
    this.loadingSpinnerService.display(true);
    return this.http.patch(`${this.BASE_URL}/courses/${updatedCourse.id}`, updatedCourse);
  }

  removeCourse(id: number): Observable<any> {
    this.loadingSpinnerService.display(true);
    return this.http.delete(`${this.BASE_URL}/courses/${id}`);
  }
}
