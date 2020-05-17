import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseItemInterface } from 'app/interfaces/course-item-interface';
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
      this.coursesDataService.getCourseById(+this.routeParams.id).then((courseItem) => {
        if (!courseItem) {
          this.editorData.editorTitle = 'New course';
        } else {
          this.courseItem = courseItem;
          this.editorData = {
            editorTitle: 'Edit course',
            courseTitle: `${this.courseItem.title}`,
            courseDescription: `${this.courseItem.description}`,
            courseDuration: `${this.courseItem.durationMinutes}`,
            courseDate: `${this.courseItem.creationDate}`,
            courseAuthors: `${this.courseItem.authors}`,
          };
        }
      });
    });
  }

  async onSaveCourse() {
    if (!this.courseItem) {
      const coursesList = await this.coursesDataService.getCoursesList();
      const newCourseId = Math.max(...coursesList.map((courseItem) => courseItem.id)) + 1;
      const newCourse: CourseItemInterface = {
        id: newCourseId,
        title: this.editorData.courseTitle,
        creationDate: this.editorData.courseDate,
        durationMinutes: +this.editorData.courseDuration,
        description: this.editorData.courseDescription,
        authors: this.editorData.courseAuthors,
        topRated: false,
      };

      await this.coursesDataService.createCourse(newCourse);

      this.router.navigate(['courses']);
    } else {
      const updatedCourse: CourseItemInterface = {
        id: +this.routeParams.id,
        title: this.editorData.courseTitle,
        creationDate: this.editorData.courseDate,
        durationMinutes: +this.editorData.courseDuration,
        description: this.editorData.courseDescription,
        topRated: this.courseItem.topRated,
        authors: this.editorData.courseAuthors,
      };

      await this.coursesDataService.updateCourse(updatedCourse);

      this.router.navigate(['courses']);
    }
  }
}
