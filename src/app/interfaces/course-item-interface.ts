interface CourseAuthor {
  id: number;
  name: string;
  lastName: string;
}

export interface CourseItemInterface {
  id: number;
  name: string;
  description: string;
  isTopRated: boolean;
  date: string;
  authors: CourseAuthor[];
  length: number;
}
