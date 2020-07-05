import {
  Component,
  OnInit,
  OnChanges,
  forwardRef,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, filter, map } from 'rxjs/operators';
import { CoursesDataService } from 'app/modules/courses-page/courses-data-service/courses-data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CourseAuthor } from 'app/interfaces/course-item-interface';

@Component({
  selector: 'app-authors-input',
  templateUrl: './authors-input.component.html',
  styleUrls: ['./authors-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorsInputComponent),
      multi: true,
    },
  ],
})
export class AuthorsInputComponent implements OnInit, OnChanges, ControlValueAccessor {
  @Input() existingAuthors: any = [];
  @Input() validationErrors: any;
  @Output() changedAuthors: EventEmitter<CourseAuthor[]> = new EventEmitter<CourseAuthor[]>();
  inputChange: Subject<HTMLInputElement> = new Subject();
  fetchedAuthors = [];
  chosenAuthors = [];
  isDropdownOpened = false;
  val = '';

  constructor(private coursesDataService: CoursesDataService) {}

  set value(val) {
    this.val = val;
    this.onChange(val);
    this.onTouch(val);
  }

  ngOnInit() {
    this.chosenAuthors = [...this.existingAuthors];

    this.inputChange
      .pipe(
        debounceTime(300),
        map((target: HTMLInputElement): string => target.value),
      )
      .subscribe((value: string) => {
        this.coursesDataService.getAuthors(value).subscribe(
          (authors) => {
            this.fetchedAuthors = authors;
            if (this.fetchedAuthors.length) {
              this.isDropdownOpened = true;
            }
          },
          (error: HttpErrorResponse) => console.log(error),
        );
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.existingAuthors && !changes.existingAuthors.firstChange) {
      this.chosenAuthors = [...changes.existingAuthors.currentValue];
    }
  }

  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  ifAuthorExists(authorId: string): boolean {
    return this.chosenAuthors.map((author) => author.id).includes(authorId);
  }

  onAuthorClick(author) {
    this.isDropdownOpened = false;
    if (!this.ifAuthorExists(author.id)) {
      const [name, lastName] = author.name.split(' ');
      this.chosenAuthors.push({ id: author.id, name, lastName, fullName: author.name });
      this.changedAuthors.emit(this.chosenAuthors);
    }
  }

  onAuthorDelete(author) {
    this.chosenAuthors = this.chosenAuthors.filter((chosenAuthor) => chosenAuthor.id !== author.id);
    this.changedAuthors.emit(this.chosenAuthors);
  }
}
