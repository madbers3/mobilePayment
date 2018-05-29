import { AbstractControl, ValidatorFn } from '@angular/forms';

export function IsPhoneValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const valid = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm.test(control.value);
    return !valid ? {'isPhone': {value: control.value}} : null;
  };
}
