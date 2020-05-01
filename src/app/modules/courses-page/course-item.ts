import {CourseItem} from 'app/interfaces/course-item';

export class CourseItem implements CourseItem {
  creationDate: string;
  description: string;
  durationMinutes: number;
  id: number;
  title: string;

  constructor(
    creationDate: string,
    description: string,
    durationMinutes: number,
    id: number,
    title: string
  ) {
    this.creationDate = creationDate;
    this.description = description;
    this.durationMinutes = durationMinutes;
    this.id = id;
    this.title = title;
  }
}
