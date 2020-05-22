import { CourseItemInterface } from 'app/interfaces/course-item-interface';

export const COURSES: CourseItemInterface[] = [
  {
    id: 1,
    name: 'React',
    date: new Date('11/08/2020').toString(),
    length: 60,
    description:
      'Learn about where you can find course descriptions,\n' +
      '        what information they include, how they work, and details about various components\n' +
      '        of a course description. Course descriptions report information about a university\n' +
      "        or college's classes. They're published both in course catalogs that outline degree\n" +
      '        requirements and in course schedules that contain descriptions for all courses offered\n' +
      '        during a particular semester',
    isTopRated: true,
    authors: [
      {
        id: 1370,
        name: 'Polly',
        lastName: 'Sosa',
      },
    ],
  },
  {
    id: 2,
    name: 'React Native',
    date: new Date('05/01/2020').toString(),
    length: 80,
    description:
      'Learn about where you can find course descriptions,\n' +
      '        what information they include, how they work, and details about various components\n' +
      '        of a course description. Course descriptions report information about a university\n' +
      "        or college's classes. They're published both in course catalogs that outline degree\n" +
      '        requirements and in course schedules that contain descriptions for all courses offered\n' +
      '        during a particular semester',
    isTopRated: false,
    authors: [
      {
        id: 8413,
        name: 'Greta',
        lastName: 'Richardson',
      },
    ],
  },
  {
    id: 3,
    name: 'AngularJS',
    date: new Date('04/29/2019').toString(),
    length: 295,
    description:
      'Learn about where you can find course descriptions,\n' +
      '        what information they include, how they work, and details about various components\n' +
      '        of a course description. Course descriptions report information about a university\n' +
      "        or college's classes. They're published both in course catalogs that outline degree\n" +
      '        requirements and in course schedules that contain descriptions for all courses offered\n' +
      '        during a particular semester',
    isTopRated: false,
    authors: [
      {
        id: 3618,
        name: 'Laura',
        lastName: 'Kirby',
      },
    ],
  },
  {
    id: 4,
    name: 'JQuery',
    date: new Date('12/05/2017').toString(),
    length: 45,
    description:
      'Learn about where you can find course descriptions,\n' +
      '        what information they include, how they work, and details about various components\n' +
      '        of a course description. Course descriptions report information about a university\n' +
      "        or college's classes. They're published both in course catalogs that outline degree\n" +
      '        requirements and in course schedules that contain descriptions for all courses offered\n' +
      '        during a particular semester',
    isTopRated: true,
    authors: [
      {
        id: 9926,
        name: 'Burt',
        lastName: 'Holland',
      },
    ],
  },
  {
    id: 5,
    name: 'Angular',
    date: new Date('05/25/2020').toString(),
    length: 120,
    description:
      'Learn about where you can find course descriptions,\n' +
      '        what information they include, how they work, and details about various components\n' +
      '        of a course description. Course descriptions report information about a university\n' +
      "        or college's classes. They're published both in course catalogs that outline degree\n" +
      '        requirements and in course schedules that contain descriptions for all courses offered\n' +
      '        during a particular semester',
    isTopRated: true,
    authors: [
      {
        id: 21,
        name: 'Maddox',
        lastName: 'Diaz',
      },
    ],
  },
  {
    id: 6,
    name: 'Vue',
    date: new Date('05/06/2020').toString(),
    length: 60,
    description:
      'Learn about where you can find course descriptions,\n' +
      '        what information they include, how they work, and details about various components\n' +
      '        of a course description. Course descriptions report information about a university\n' +
      "        or college's classes. They're published both in course catalogs that outline degree\n" +
      '        requirements and in course schedules that contain descriptions for all courses offered\n' +
      '        during a particular semester',
    isTopRated: false,
    authors: [
      {
        id: 1167,
        name: 'Garrison',
        lastName: 'Chambers',
      },
    ],
  },
];
