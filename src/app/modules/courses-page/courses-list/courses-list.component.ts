import { Component, OnInit } from '@angular/core';
import { CourseItem } from 'app/interfaces/course-item';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  coursesList: CourseItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.coursesList = [
      {
        id: 1,
        title: 'Course 1',
        creationDate: new Date('11/08/2019').toString(),
        durationMinutes: 60,
        description:
          'Learn about where you can find course descriptions,\n' +
          '        what information they include, how they work, and details about various components\n' +
          '        of a course description. Course descriptions report information about a university\n' +
          "        or college's classes. They're published both in course catalogs that outline degree\n" +
          '        requirements and in course schedules that contain descriptions for all courses offered\n' +
          '        during a particular semester',
      },
      {
        id: 2,
        title: 'Course 2',
        creationDate: new Date('11/01/2019').toString(),
        durationMinutes: 30,
        description:
          'Learn about where you can find course descriptions,\n' +
          '        what information they include, how they work, and details about various components\n' +
          '        of a course description. Course descriptions report information about a university\n' +
          "        or college's classes. They're published both in course catalogs that outline degree\n" +
          '        requirements and in course schedules that contain descriptions for all courses offered\n' +
          '        during a particular semester',
      },
      {
        id: 3,
        title: 'Course 3',
        creationDate: new Date('12/01/2019').toString(),
        durationMinutes: 90,
        description:
          'Learn about where you can find course descriptions,\n' +
          '        what information they include, how they work, and details about various components\n' +
          '        of a course description. Course descriptions report information about a university\n' +
          "        or college's classes. They're published both in course catalogs that outline degree\n" +
          '        requirements and in course schedules that contain descriptions for all courses offered\n' +
          '        during a particular semester',
      },
      {
        id: 4,
        title: 'Course 4',
        creationDate: new Date('12/05/2019').toString(),
        durationMinutes: 90,
        description:
          'Learn about where you can find course descriptions,\n' +
          '        what information they include, how they work, and details about various components\n' +
          '        of a course description. Course descriptions report information about a university\n' +
          "        or college's classes. They're published both in course catalogs that outline degree\n" +
          '        requirements and in course schedules that contain descriptions for all courses offered\n' +
          '        during a particular semester',
      },
      {
        id: 5,
        title: 'Course 5',
        creationDate: new Date('10/20/2019').toString(),
        durationMinutes: 120,
        description:
          'Learn about where you can find course descriptions,\n' +
          '        what information they include, how they work, and details about various components\n' +
          '        of a course description. Course descriptions report information about a university\n' +
          "        or college's classes. They're published both in course catalogs that outline degree\n" +
          '        requirements and in course schedules that contain descriptions for all courses offered\n' +
          '        during a particular semester',
      },
      {
        id: 6,
        title: 'Course 6',
        creationDate: new Date('10/20/2019').toString(),
        durationMinutes: 60,
        description:
          'Learn about where you can find course descriptions,\n' +
          '        what information they include, how they work, and details about various components\n' +
          '        of a course description. Course descriptions report information about a university\n' +
          "        or college's classes. They're published both in course catalogs that outline degree\n" +
          '        requirements and in course schedules that contain descriptions for all courses offered\n' +
          '        during a particular semester',
      },
    ];
  }

  onDeleteCourse(event): void {
    console.log(event.id);
  }
}
