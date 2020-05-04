import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.scss'],
})
export class SearchCourseComponent implements OnInit {
  courseNameToSearch = '';

  constructor() {}

  ngOnInit(): void {}

  onClickSearch(): void {
    console.log(this.courseNameToSearch);
  }
}
