import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-container',
  templateUrl: './courses-container.component.html',
  styleUrls: ['./courses-container.component.scss'],
})
export class CoursesContainerComponent implements OnInit {
  courseNameToSearch: string;

  constructor() {}

  ngOnInit(): void {}

  onSearchCourse(courseNameToSearch) {
    this.courseNameToSearch = courseNameToSearch;
  }
}
