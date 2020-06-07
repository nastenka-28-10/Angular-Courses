import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { map, debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.scss'],
})
export class SearchCourseComponent implements OnInit {
  inputChange: Subject<HTMLInputElement> = new Subject();
  @Output() searchCourse: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.inputChange
      .pipe(
        debounceTime(300),
        map((target: HTMLInputElement): string => target.value),
        filter((inputValue: string): boolean => !inputValue || inputValue.length >= 3),
      )
      .subscribe((value: string) => this.searchCourse.emit(value));
  }
}
