import { Directive } from '@angular/core';
import { NG_VALIDATORS, ValidationErrors, FormControl } from '@angular/forms';

@Directive({
  selector: '[appValidateDuration]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidateDurationDirective, multi: true }],
})
export class ValidateDurationDirective {
  constructor() {}
  static validateDuration(control: FormControl): ValidationErrors {
    if (control.value === '') {
      return null;
    }

    const isDateValid = /^\d+$/.test(control.value);

    if (!isDateValid) {
      return { invalidDuration: 'Only numbers allow' };
    }

    return null;
  }

  validate(control: FormControl): ValidationErrors | null {
    return ValidateDurationDirective.validateDuration(control);
  }
}
