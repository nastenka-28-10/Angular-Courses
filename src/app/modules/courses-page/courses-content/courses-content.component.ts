import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-content',
  templateUrl: './courses-content.component.html',
  styleUrls: ['./courses-content.component.scss'],
})
export class CoursesContentComponent implements OnInit {
  courseNameToSearch: string;

  constructor() {}

  ngOnInit(): void {}

  onSearchCourse(courseNameToSearch) {
    this.courseNameToSearch = courseNameToSearch;
  }
}
