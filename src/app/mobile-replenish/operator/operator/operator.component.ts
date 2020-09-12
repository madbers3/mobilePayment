import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import validOperatorCode from '../../../validators/right-сode.validator';
import noLess from '../../../validators/no-less.validator';
import noMore from '../../../validators/no-more.validator';
import { InfoSnackbarComponent } from '../info-snackbar/info-snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar/snack-bar-config';
import { ReplenishPhoneService } from '../replenish-phone.service';
import { OperatorsService } from '../../operators.service';
import { MobileOperator } from '../../shared/mobil-operator.model';
import { RESPONSE_STATUS_SUCCESS } from '../../shared/replenish-form-response.model';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss']
})
export class OperatorComponent {
  public operator: MobileOperator;
  public fillForm: FormGroup;

  public readonly phoneMask: (string | RegExp)[] = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  public readonly amountMask: RegExp[] = [/[1-9]/, /[0-9]/, /[0-9]/, /[0-9]/];
  public readonly phonePattern: RegExp = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  public readonly redirectTime = 5000;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private replenishService: ReplenishPhoneService,
              public operatorsService: OperatorsService,
              public snackBar: MatSnackBar,
              private fb: FormBuilder) {
    const id = +this.route.snapshot.paramMap.get('id');

    this.operator = operatorsService.getOperatorById(id);

    this.createForm();
  }

  public createForm(): void {
    this.fillForm = this.fb.group({
      phone: ['', [
        Validators.required,
        validOperatorCode(this.operator.codes),
        Validators.pattern(this.phonePattern),
      ]],
      amount: ['', [
        Validators.required,
        noLess(1),
        noMore(1000)
      ]]
    });
  }

  public async onSubmit(): Promise<void> {
    this.fillForm.disable();

    const result = await this.replenishService.replenish({
      amount: +this.fillForm.controls.amount.value,
      phone: this.fillForm.controls.phone.value
    });

    let snackBarConfig: MatSnackBarConfig;

    if (result.status === RESPONSE_STATUS_SUCCESS) {
      snackBarConfig = {
        duration: 5000,
        data: `${result.data.message}: ${result.data.sent.amount}₽ for ${result.data.sent.phone}.
           You will be redirected to main page in ${this.redirectTime / 1000} seconds`
      };

      setTimeout(() => {
        this.router.navigate(['/']);
      }, this.redirectTime);
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
