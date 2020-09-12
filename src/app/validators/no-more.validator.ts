import { AbstractControl, ValidatorFn } from '@angular/forms';

export default function noMore(threshold: number): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const valid = +control.value <= threshold;
    return !valid ? {noMore: {value: control.value}} : null;
  };
}
