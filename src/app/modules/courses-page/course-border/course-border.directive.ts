import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import * as moment from 'moment';

@Directive({
  selector: '[appCourseBorder]',
})
export class CourseBorderDirective implements OnInit {
  private freshCourseBorderColor = '#9bc837';
  private upcomingCourseBorderColor = '#30b6dd';

  constructor(private element: ElementRef) {}

  @Input('appCourseBorder') creationDate: string;

  ngOnInit() {
    const daysFromCreationDate: number = moment().diff(moment(this.creationDate), 'days');
    if (daysFromCreationDate > 0 && daysFromCreationDate <= 14) {
      return this.setBorder(this.freshCourseBorderColor);
    }
    if (daysFromCreationDate < 0) {
      return this.setBorder(this.upcomingCourseBorderColor);
    }
  }

  private setBorder(color: string): void {
    this.element.nativeElement.style.border = `1.5px solid ${color}`;
  }
}
