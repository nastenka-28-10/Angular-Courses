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

  async createCourse(newCourse: CourseItemInterface): Promise<CourseItemInterface> {
    COURSES.push(newCourse);
    return newCourse;
  }

  async updateCourse(updatedCourse: CourseItemInterface): Promise<CourseItemInterface> {
    const courseToUpdate = await this.getCourseById(+updatedCourse.id);
    Object.keys(updatedCourse).forEach((key) => {
      courseToUpdate[key] = updatedCourse[key];
    });
    return courseToUpdate;
  }

  async removeCourse(id: number): Promise<CourseItemInterface | number> {
    const deletedCourse = await this.getCourseById(id);
    const indexOfRemovedCourse = COURSES.indexOf(deletedCourse);
    if (indexOfRemovedCourse !== -1) {
      COURSES.splice(indexOfRemovedCourse, 1);
      return deletedCourse;
    }
    return -1;
  }
}
