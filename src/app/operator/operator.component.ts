import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequesterService } from '../services/requester.service';
import { MobileOperator, RESPONSE_STATUS_SUCCESS } from '../typings';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import validOperatorCode from '../validators/rightCode.validator';
import noLess from '../validators/noLess.validator';
import noMore from '../validators/noMore.validator';
import { InfoSnackbarComponent } from '../info-snackbar/info-snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar/snack-bar-config';


@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss']
})
export class OperatorComponent {
  public operator: MobileOperator;
  public fillForm: FormGroup;
  public phoneMask = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  public amountMask = [/[1-9]/, /[0-9]/, /[0-9]/, /[0-9]/];

  constructor(private router: Router,
              private route: ActivatedRoute,
              public snackBar: MatSnackBar,
              private requester: RequesterService,
              private fb: FormBuilder) {
    const id = +this.route.snapshot.paramMap.get('id');
    this.operator = requester.getOperator(id);
    this.createForm();
  }

  createForm() {
    this.fillForm = this.fb.group({
      phone: ['', [
        Validators.required,
        validOperatorCode(this.operator.codes),
        Validators.pattern(/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/),
      ]],
      amount: ['', [
        Validators.required,
        noLess(1),
        noMore(1000)
      ]]
    });
  }

  async onSubmit(s) {
    this.fillForm.disable();

    const result = await this.requester.fill(this.fillForm.value);

    let snackBarConfig: MatSnackBarConfig;

    if (result.status === RESPONSE_STATUS_SUCCESS) {
      snackBarConfig = {
        duration: 5000,
        data: `${result.data.message}: ${result.data.sent.amount}₽ for ${result.data.sent.phone}.
           You will be redirected to main page in 5 seconds`
      };

      setTimeout(() => {
        this.router.navigate(['/']);
      }, 5000);
    } else {
      snackBarConfig = {
        duration: 5000,
        data: `${result.data.message}: ${result.data.sent.amount}₽ for ${result.data.sent.phone}.
           Try again later.`
      };

      setTimeout(() => {
        this.fillForm.enable();
      }, 1000);
    }

    this.snackBar.openFromComponent(InfoSnackbarComponent, snackBarConfig);
  }
}
