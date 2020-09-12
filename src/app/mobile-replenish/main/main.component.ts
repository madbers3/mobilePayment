import { Component } from '@angular/core';
import { OperatorsService } from '../operators.service';
import { MobileOperator } from '../shared/mobil-operator.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  operators: MobileOperator[] = [];

  constructor(private operatorsService: OperatorsService) {
    this.operators = this.operatorsService.getAllOperators();
  }
}
