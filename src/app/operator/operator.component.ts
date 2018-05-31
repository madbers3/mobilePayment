import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequesterService } from '../services/requester.service';
import { MobileOperator } from '../typings';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import validOperatorCode from '../validators/rightCode.validator';
import noLess from '../validators/noLess.validator';
import noMore from '../validators/noMore.validator';
import { MatSnackBar } from '@angular/material';
import { InfoSnackbarComponent } from '../info-snackbar/info-snackbar.component';


@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss']
})
export class OperatorComponent {
  operator: MobileOperator;
  fillForm: FormGroup;
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
        Validators.pattern(/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm),
      ]],
      amount: ['', [
        Validators.required,
        noLess(1),
        noMore(1000)
      ]]
    });
  }

  onSubmit(formDirective: FormGroupDirective) {
    this.requester.fill(this.fillForm.value)
      .then((res) => {
        this.snackBar.openFromComponent(InfoSnackbarComponent, {
          duration: 5000,
          data: `${res.data.message}: ${res.data.sent.amount}₽ for ${res.data.sent.phone}.
           You will be redirected to main page in 5 seconds`
        });
        this.fillForm.reset();
        formDirective.resetForm();
        this.fillForm.updateValueAndValidity();
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 5000);
      })
      .catch((err) => {
        console.log(err);
        this.snackBar.openFromComponent(InfoSnackbarComponent, {
          duration: 1000,
          data: `${err.data.message}: ${err.data.sent.amount}₽ for ${err.data.sent.phone}.
           Try again later.`
        });
      });
  }

}
