import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { CourseItemInterface } from 'app/interfaces/course-item-interface';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(courses: CourseItemInterface[], orderType = 'desc'): CourseItemInterface[] {
    const sortedCourses = courses.sort((item1, item2) =>
      moment(item1.date).diff(item2.date, 'days') > 0 ? -1 : 1,
    );

    if (orderType === 'asc') {
      return sortedCourses.reverse();
    }
    return sortedCourses;
  }
}
