import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RequesterService} from '../requester.service';
import IMobileOperator from '../typings/IMobileOperator';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss']
})
export class OperatorComponent {
  operator: IMobileOperator;
  public model: { name: string, phone: string } = {name: '', phone: ''};
  public phoneMask = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  public amountMask = [/[1-9]/, /[0-9]/, /[0-9]/, /[0-9]/];

  constructor(private route: ActivatedRoute, private requester: RequesterService) {
    const id = +this.route.snapshot.paramMap.get('id');
    this.operator = requester.getOperator(id);
  }

  onSubmit() {
    this.requester.fill(this.model)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

}
