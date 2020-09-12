import { AbstractControl, ValidatorFn } from '@angular/forms';

export default function noLess(threshold: number): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const valid = +control.value >= threshold;
    return !valid ? {noLess: {value: control.value}} : null;
  };
}
