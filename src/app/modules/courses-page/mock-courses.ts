import { CourseItemInterface } from 'app/interfaces/course-item-interface';

export const COURSES: CourseItemInterface[] = [
  {
    id: 1,
    title: 'React',
    creationDate: new Date('11/08/2020').toString(),
    durationMinutes: 60,
    description:
      'Learn about where you can find course descriptions,\n' +
      '        what information they include, how they work, and details about various components\n' +
      '        of a course description. Course descriptions report information about a university\n' +
      "        or college's classes. They're published both in course catalogs that outline degree\n" +
      '        requirements and in course schedules that contain descriptions for all courses offered\n' +
      '        during a particular semester',
    topRated: true,
    authors: 'Ivan',
  },
  {
    id: 2,
    title: 'React Native',
    creationDate: new Date('05/01/2020').toString(),
    durationMinutes: 80,
    description:
      'Learn about where you can find course descriptions,\n' +
      '        what information they include, how they work, and details about various components\n' +
      '        of a course description. Course descriptions report information about a university\n' +
      "        or college's classes. They're published both in course catalogs that outline degree\n" +
      '        requirements and in course schedules that contain descriptions for all courses offered\n' +
      '        during a particular semester',
    topRated: false,
    authors: 'Anatolii',
  },
  {
    id: 3,
    title: 'AngularJS',
    creationDate: new Date('04/29/2019').toString(),
    durationMinutes: 295,
    description:
      'Learn about where you can find course descriptions,\n' +
      '        what information they include, how they work, and details about various components\n' +
      '        of a course description. Course descriptions report information about a university\n' +
      "        or college's classes. They're published both in course catalogs that outline degree\n" +
      '        requirements and in course schedules that contain descriptions for all courses offered\n' +
      '        during a particular semester',
    topRated: false,
    authors: 'Mariia',
  },
  {
    id: 4,
    title: 'JQuery',
    creationDate: new Date('12/05/2017').toString(),
    durationMinutes: 45,
    description:
      'Learn about where you can find course descriptions,\n' +
      '        what information they include, how they work, and details about various components\n' +
      '        of a course description. Course descriptions report information about a university\n' +
      "        or college's classes. They're published both in course catalogs that outline degree\n" +
      '        requirements and in course schedules that contain descriptions for all courses offered\n' +
      '        during a particular semester',
    topRated: true,
    authors: 'Sergei',
  },
  {
    id: 5,
    title: 'Angular',
    creationDate: new Date('05/25/2020').toString(),
    durationMinutes: 120,
    description:
      'Learn about where you can find course descriptions,\n' +
      '        what information they include, how they work, and details about various components\n' +
      '        of a course description. Course descriptions report information about a university\n' +
      "        or college's classes. They're published both in course catalogs that outline degree\n" +
      '        requirements and in course schedules that contain descriptions for all courses offered\n' +
      '        during a particular semester',
    topRated: true,
    authors: 'Irina',
  },
  {
    id: 6,
    title: 'Vue',
    creationDate: new Date('05/06/2020').toString(),
    durationMinutes: 60,
    description:
      'Learn about where you can find course descriptions,\n' +
      '        what information they include, how they work, and details about various components\n' +
      '        of a course description. Course descriptions report information about a university\n' +
      "        or college's classes. They're published both in course catalogs that outline degree\n" +
      '        requirements and in course schedules that contain descriptions for all courses offered\n' +
      '        during a particular semester',
    topRated: false,
    authors: 'Vladislav',
  },
];
