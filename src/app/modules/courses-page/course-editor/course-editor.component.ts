import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseItemInterface, CourseAuthor } from 'app/interfaces/course-item-interface';
import { CoursesDataService } from 'app/modules/courses-page/courses-data-service/courses-data.service';
import { EditorDataInterface } from 'app/interfaces/editor-data-interface';
import { LoadingSpinnerServiceService } from 'app/modules/core/loading-spinner-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-course-editor',
  templateUrl: './course-editor.component.html',
  styleUrls: ['./course-editor.scss'],
})
export class CourseEditorComponent implements OnInit {
  public routeParams: any = {};
  public coursesEditor: any = {};
  public chosenAuthors: CourseAuthor[] = [];
  public existingAuthors: CourseAuthor[] = [];

  public courseItem: CourseItemInterface | null = null;
  public editorData: EditorDataInterface = {
    editorTitle: '',
    courseTitle: '',
    courseDescription: '',
    courseDuration: '',
    courseDate: '',
    courseAuthors: [],
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesDataService: CoursesDataService,
    private loadingSpinnerService: LoadingSpinnerServiceService,
  ) {
    this.coursesEditor = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
      duration: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      authors: new FormControl(''),
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
              courseDate: moment(this.courseItem.date).format('DD/MM/YYYY'),
              courseAuthors: this.courseItem.authors,
            };

            this.coursesEditor.controls.title.setValue(this.editorData.courseTitle);
            this.coursesEditor.controls.description.setValue(this.editorData.courseDescription);
            this.coursesEditor.controls.duration.setValue(this.editorData.courseDuration);
            this.coursesEditor.controls.date.setValue(this.editorData.courseDate);
            this.coursesEditor.controls.authors.setValue(this.editorData.courseAuthors);
            this.existingAuthors = this.courseItem.authors.map((author) => ({
              id: author.id,
              name: author.name,
              lastName: author.lastName,
              fullName: `${author.name} ${author.lastName}`,
            }));
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

      const newCourse: CourseItemInterface = {
        id: newCourseId,
        name: this.coursesEditor.value.title,
        date: moment(this.coursesEditor.value.date, 'DD/MM/YYYY').format(),
        length: +this.coursesEditor.value.duration,
        description: this.coursesEditor.value.description,
        authors: this.chosenAuthors.map((author) => ({
          id: author.id,
          name: author.name,
          lastName: author.lastName,
        })),
        isTopRated: false,
      };

      this.coursesDataService.createCourse(newCourse).subscribe(() => {
        this.loadingSpinnerService.display(false);
        this.router.navigate(['courses']);
      });
    } else {
      const areCourseAuthorsNotChanged = _.isEqual(this.courseItem.authors, this.chosenAuthors);

      const updatedCourse: CourseItemInterface = {
        id: this.courseItem.id,
        name: this.coursesEditor.value.title,
        date: moment(this.coursesEditor.value.date, 'DD/MM/YYYY').format(),
        length: +this.coursesEditor.value.duration,
        description: this.coursesEditor.value.description,
        isTopRated: this.courseItem.isTopRated,
        authors: areCourseAuthorsNotChanged ? this.courseItem.authors : this.chosenAuthors,
      };

      this.coursesDataService.updateCourse(updatedCourse).subscribe(() => {
        this.loadingSpinnerService.display(false);
        this.router.navigate(['courses']);
      });
    }
  }

  onChangeAuthors(authors: CourseAuthor[]) {
    this.chosenAuthors = authors;
  }
}
