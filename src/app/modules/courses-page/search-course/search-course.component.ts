import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { map, debounceTime, filter } from 'rxjs/operators';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.scss'],
})
export class SearchCourseComponent implements OnInit {
  inputChange: Subject<HTMLInputElement> = new Subject();
  searchField: any = {};
  @Output() searchCourse: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.searchField = new FormGroup({
      search: new FormControl(''),
    });
  }

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
