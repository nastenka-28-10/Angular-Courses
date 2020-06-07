import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseItemInterface, CourseAuthor } from 'app/interfaces/course-item-interface';
import { CoursesDataService } from 'app/modules/courses-page/courses-data-service/courses-data.service';
import { EditorDataInterface } from 'app/interfaces/editor-data-interface';

@Component({
  selector: 'app-course-editor',
  templateUrl: './course-editor.component.html',
  styleUrls: ['./course-editor.scss'],
})
export class CourseEditorComponent implements OnInit {
  public routeParams: any = {};
  public courseItem: CourseItemInterface | null = null;
  public editorData: EditorDataInterface = {
    editorTitle: '',
    courseTitle: '',
    courseDescription: '',
    courseDuration: '',
    courseDate: '',
    courseAuthors: '',
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesDataService: CoursesDataService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.routeParams.id = data.id;
      if (this.routeParams.id) {
        this.coursesDataService
          .getCourseById(+this.routeParams.id)
          .then((courseItem) => {
            this.courseItem = courseItem;
            this.editorData = {
              editorTitle: 'Edit course',
              courseTitle: `${this.courseItem.name}`,
              courseDescription: `${this.courseItem.description}`,
              courseDuration: `${this.courseItem.length}`,
              courseDate: `${this.courseItem.date}`,
              courseAuthors: this.courseItem.authors
                .map((item: CourseAuthor) => `${item.name} ${item.lastName}`)
                .join(', '),
            };
          })
          .catch((error) => console.log(error));
      } else {
        this.editorData.editorTitle = 'New course';
      }
    });
  }

  async onSaveCourse() {
    if (!this.courseItem) {
      const newCourseId = +('' + Math.random()).slice(2);
      const courseAuthors = this.generateCourseAuthorsArray(this.editorData.courseAuthors);

      const newCourse: CourseItemInterface = {
        id: newCourseId,
        name: this.editorData.courseTitle,
        date: this.editorData.courseDate,
        length: +this.editorData.courseDuration,
        description: this.editorData.courseDescription,
        authors: courseAuthors,
        isTopRated: false,
      };

      await this.coursesDataService.createCourse(newCourse);

      this.router.navigate(['courses']);
    } else {
      const areCourseAuthorsNotChanged =
        this.getCourseAuthorsStringView(this.courseItem.authors) === this.editorData.courseAuthors;

      const updatedCourse: CourseItemInterface = {
        id: this.courseItem.id,
        name: this.editorData.courseTitle,
        date: this.editorData.courseDate,
        length: +this.editorData.courseDuration,
        description: this.editorData.courseDescription,
        isTopRated: this.courseItem.isTopRated,
        authors: areCourseAuthorsNotChanged
          ? this.courseItem.authors
          : this.generateCourseAuthorsArray(this.editorData.courseAuthors),
      };

      await this.coursesDataService.updateCourse(updatedCourse);

      this.router.navigate(['courses']);
    }
  }

  private getCourseAuthorsStringView(authors: CourseAuthor[]): string {
    return authors.map((item: CourseAuthor) => `${item.name} ${item.lastName}`).join(', ');
  }

  private generateCourseAuthorsArray(authorsStringView: string): CourseAuthor[] {
    if (authorsStringView.includes(',')) {
      return authorsStringView
        .split(',')
        .map((author: string) => author.replace(/^\s*(.*)\s*$/, '$1'))
        .map((author: string) => {
          const [name, lastName] = author.split(' ');
          return {
            id: +('' + Math.random()).slice(2),
            name,
            lastName,
          };
        });
    }
    const [name, lastName] = authorsStringView.split(' ');
    return [
      {
        id: +('' + Math.random()).slice(2),
        name,
        lastName,
      },
    ];
  }
}
