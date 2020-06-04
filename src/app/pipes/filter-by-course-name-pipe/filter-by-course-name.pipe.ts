import { Pipe, PipeTransform } from '@angular/core';
import { CourseItemInterface } from 'app/interfaces/course-item-interface';

@Pipe({
  name: 'filterByCourseName',
})
export class FilterByCourseNamePipe implements PipeTransform {
  transform(courses: CourseItemInterface[], courseNameToSearch: string): CourseItemInterface[] {
    if (courseNameToSearch) {
      return courses.filter((item) =>
        item.name.toLowerCase().includes(courseNameToSearch.toLowerCase()),
      );
    }
    return courses;
  }
}
