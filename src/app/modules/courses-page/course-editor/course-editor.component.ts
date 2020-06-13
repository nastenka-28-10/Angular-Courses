import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseItemInterface, CourseAuthor } from 'app/interfaces/course-item-interface';
import { CoursesDataService } from 'app/modules/courses-page/courses-data-service/courses-data.service';
import { EditorDataInterface } from 'app/interfaces/editor-data-interface';
import { LoadingSpinnerServiceService } from 'app/modules/core/loading-spinner-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-course-editor',
  templateUrl: './course-editor.component.html',
  styleUrls: ['./course-editor.scss'],
})
export class CourseEditorComponent implements OnInit {
  public routeParams: any = {};
  public coursesEditor: any = {};
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
    private loadingSpinnerService: LoadingSpinnerServiceService,
  ) {
    this.coursesEditor = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      authors: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.routeParams.id = data.id;
      if (this.routeParams.id) {
        this.coursesDataService.getCourseById(+this.routeParams.id).subscribe(
          (courseItem) => {
            this.loadingSpinnerService.display(false);
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

            this.coursesEditor.controls.title.setValue(this.editorData.courseTitle);
            this.coursesEditor.controls.description.setValue(this.editorData.courseDescription);
            this.coursesEditor.controls.duration.setValue(this.editorData.courseDuration);
            this.coursesEditor.controls.date.setValue(this.editorData.courseDate);
            this.coursesEditor.controls.authors.setValue(this.editorData.courseAuthors);
          },
          (error: HttpErrorResponse) => console.log(error),
        );
      } else {
        this.editorData.editorTitle = 'New course';
      }
    });
  }

  async onSaveCourse() {
    if (!this.courseItem) {
      const newCourseId = +('' + Math.random()).slice(2);
      const courseAuthors = this.generateCourseAuthorsArray(this.coursesEditor.value.authors);

      const newCourse: CourseItemInterface = {
        id: newCourseId,
        name: this.coursesEditor.value.title,
        date: this.coursesEditor.value.date,
        length: +this.coursesEditor.value.duration,
        description: this.coursesEditor.value.description,
        authors: courseAuthors,
        isTopRated: false,
      };

      this.coursesDataService.createCourse(newCourse).subscribe(() => {
        this.loadingSpinnerService.display(false);
        this.router.navigate(['courses']);
      });
    } else {
      const areCourseAuthorsNotChanged =
        this.getCourseAuthorsStringView(this.courseItem.authors) === this.coursesEditor.value.authors;

      const updatedCourse: CourseItemInterface = {
        id: this.courseItem.id,
        name: this.coursesEditor.value.title,
        date: this.coursesEditor.value.date,
        length: +this.coursesEditor.value.duration,
        description: this.coursesEditor.value.description,
        isTopRated: this.courseItem.isTopRated,
        authors: areCourseAuthorsNotChanged
          ? this.courseItem.authors
          : this.generateCourseAuthorsArray(this.coursesEditor.value.authors),
      };

      this.coursesDataService.updateCourse(updatedCourse).subscribe(() => {
        this.loadingSpinnerService.display(false);
        this.router.navigate(['courses']);
      });
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
        id: +`${Math.random()}`.slice(2),
        name,
        lastName,
      },
    ];
  }
}
