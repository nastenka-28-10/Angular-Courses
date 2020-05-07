import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseItem } from 'app/interfaces/course-item';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
})
export class CourseItemComponent implements OnInit {
  @Input() courseItem: CourseItem;
  @Output() deleteCourse: EventEmitter<CourseItem> = new EventEmitter<CourseItem>();

  constructor() {}

  ngOnInit(): void {}

  onClickDelete() {
    this.deleteCourse.emit(this.courseItem);
  }
}
