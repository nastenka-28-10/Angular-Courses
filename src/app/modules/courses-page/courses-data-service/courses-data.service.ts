import { Injectable } from '@angular/core';

import { COURSES } from 'app/modules/courses-page/mock-courses';
import { CourseItemInterface } from 'app/interfaces/course-item-interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoursesDataService {
  constructor(private http: HttpClient) {}

  private BASE_URL = `http://localhost:3004`;

  getCoursesList(start?: number, count?: number, textFragment = ''): Promise<any> {
    if (!start && !count) {
      return textFragment
        ? this.http.get(`${this.BASE_URL}/courses?textFragment=${textFragment}`).toPromise()
        : this.http.get(`${this.BASE_URL}/courses`).toPromise();
    }

    return this.http
      .get(`${this.BASE_URL}/courses?start=${start}&count=${count}&textFragment=${textFragment}`)
      .toPromise();
  }

  getCourseById(id: number): Promise<any> {
    return this.http.get(`${this.BASE_URL}/courses/${id}`).toPromise();
  }

  createCourse(newCourse: CourseItemInterface): Promise<any> {
    return this.http.post(`${this.BASE_URL}/courses`, newCourse).toPromise();
  }

  updateCourse(updatedCourse: CourseItemInterface): Promise<any> {
    return this.http
      .patch(`${this.BASE_URL}/courses/${updatedCourse.id}`, updatedCourse)
      .toPromise();
  }

  removeCourse(id: number): Promise<any> {
    return this.http.delete(`${this.BASE_URL}/courses/${id}`).toPromise();
  }
}
