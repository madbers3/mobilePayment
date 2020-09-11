import { AbstractControl, ValidatorFn } from '@angular/forms';

export default function validOperatorCode(codes: number[]): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    let valid = false;
    const currentCode = control.value && control.value.match(/\((\d+)\)/);
    if (currentCode && currentCode[1]) {
      codes.forEach(item => {
        if (+currentCode[1] === item) {
          valid = true;
        }
      });
    }
    return !valid ? {'validOperatorCode': {value: control.value}} : null;
  };
}
