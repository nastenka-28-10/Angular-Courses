import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseItemInterface } from 'app/interfaces/course-item-interface';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
})
export class CourseItemComponent implements OnInit {
  @Input() courseItem: CourseItemInterface;
  @Output() deleteCourse: EventEmitter<CourseItemInterface> = new EventEmitter<
    CourseItemInterface
  >();

  constructor() {}

  ngOnInit(): void {}

  onClickDelete() {
    this.deleteCourse.emit(this.courseItem);
  }
}
