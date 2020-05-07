import { Pipe, PipeTransform } from '@angular/core';
import {CourseItem} from 'app/interfaces/course-item';

@Pipe({
  name: 'filterByCourseName'
})
export class FilterByCourseNamePipe implements PipeTransform {

  transform(courses: CourseItem[], courseNameToSearch: string): CourseItem[] {
    if (courseNameToSearch) {
      return courses.filter(item => item.title.toLowerCase().includes(courseNameToSearch.toLowerCase()));
    }
    return courses;
  }
}
