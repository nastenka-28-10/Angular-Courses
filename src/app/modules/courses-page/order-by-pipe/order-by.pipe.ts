import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import {CourseItem} from 'app/interfaces/course-item';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(courses: CourseItem[], orderType= 'desc'): CourseItem[] {
    const sortedCourses = courses.sort(
      (item1, item2) =>
      moment(item1.creationDate).diff(item2.creationDate, 'days') > 0 ? -1 : 1
    );

    if (orderType === 'asc') {
      return sortedCourses.reverse();
    }
    return sortedCourses;
  }
}
