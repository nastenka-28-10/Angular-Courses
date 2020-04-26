import {ICourseItem} from './course-item.model';

export class CourseItem implements ICourseItem {
  public creationDate: string;
  public description: string;
  public durationMinutes: number;
  public id: number;
  public title: string;

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
