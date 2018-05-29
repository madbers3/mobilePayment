import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';
import {IsPhoneValidator} from './is-phone-validator';

@Directive({
  selector: '[appIsPhone]',
  providers: [{provide: NG_VALIDATORS, useExisting: IsPhoneDirective, multi: true}]
})
export class IsPhoneDirective implements Validator {

  validate(control: AbstractControl): { [key: string]: any } {
    return IsPhoneValidator()(control);
  }

}
