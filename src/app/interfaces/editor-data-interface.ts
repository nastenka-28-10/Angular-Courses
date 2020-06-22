import { CourseAuthor } from 'app/interfaces/course-item-interface';

export interface EditorDataInterface {
  editorTitle: string;
  courseTitle: string;
  courseDescription: string;
  courseDuration: string;
  courseDate: string;
  courseAuthors: CourseAuthor[];
}
