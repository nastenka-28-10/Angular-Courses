import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.scss'],
})
export class SearchCourseComponent implements OnInit {
  @Output() searchCourse: EventEmitter<string> = new EventEmitter<string>();
  courseNameToSearch = '';

  constructor() {}

  ngOnInit(): void {}

  onClickSearch(): void {
    this.searchCourse.emit(this.courseNameToSearch);
  }
}
