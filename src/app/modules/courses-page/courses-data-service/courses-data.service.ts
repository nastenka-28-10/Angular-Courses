import { Injectable } from '@angular/core';

import { COURSES } from 'app/modules/courses-page/mock-courses';
import { CourseItem } from 'app/interfaces/course-item';

@Injectable({
  providedIn: 'root',
})
export class CoursesDataService {
  getCoursesList(): CourseItem[] {
    return COURSES;
  }

  getItemById(id: number): CourseItem {
    return COURSES.filter((item: CourseItem): boolean => item.id === id)[0];
  }

  createCourse(newCourse: CourseItem): CourseItem {
    COURSES.push(newCourse);
    return newCourse;
  }

  updateItem(updatedCourse: CourseItem): CourseItem {
    const courseToUpdate = this.getItemById(updatedCourse.id);
    Object.keys(updatedCourse).forEach((key) => {
      courseToUpdate[key] = updatedCourse[key];
    });
    return courseToUpdate;
  }

  removeItem(id: number): CourseItem {
    const deletedCourse = this.getItemById(id);
    const indexOfRemovedCourse = COURSES.indexOf(deletedCourse);
    if (indexOfRemovedCourse !== -1) {
      COURSES.splice(indexOfRemovedCourse, 1);
      return deletedCourse;
    }
    return;
  }
}
