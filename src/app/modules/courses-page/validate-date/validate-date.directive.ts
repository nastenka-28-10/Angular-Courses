import { Directive } from '@angular/core';
import { NG_VALIDATORS, ValidationErrors, FormControl } from '@angular/forms';

@Directive({
  selector: '[appValidateDate]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidateDateDirective, multi: true }],
})
export class ValidateDateDirective {
  constructor() {}
  static validateDate(control: FormControl): ValidationErrors {
    if (control.value === '') {
      return null;
    }

    const isDateValid = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/.test(
      control.value,
    );

    if (!isDateValid) {
      return { invalidDate: 'Invalid date format' };
    }

    return null;
  }

  validate(control: FormControl): ValidationErrors | null {
    return ValidateDateDirective.validateDate(control);
  }
}
