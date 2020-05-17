import { Injectable } from '@angular/core';

import { COURSES } from 'app/modules/courses-page/mock-courses';
import { CourseItemInterface } from 'app/interfaces/course-item-interface';

@Injectable({
  providedIn: 'root',
})
export class CoursesDataService {
  async getCoursesList(): Promise<CourseItemInterface[]> {
    return COURSES;
  }

  async getCourseById(id: number): Promise<CourseItemInterface> {
    return COURSES.filter((item: CourseItemInterface): boolean => item.id === id)[0];
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
