import { Component } from '@angular/core';
import {RequesterService} from '../requester.service';
import IMobileOperator from '../typings/IMobileOperator';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  operators: IMobileOperator[];
  constructor(private requester: RequesterService) {
    this.operators = requester.getAllOperators();
  }
}
