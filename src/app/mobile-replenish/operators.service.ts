import { MOBILE_OPERATORS } from './shared/mobile-operators';
import { Injectable } from '@angular/core';
import { MobileOperator } from './shared/mobil-operator.model';

@Injectable({
  providedIn: 'root'
})
export class OperatorsService {
  private readonly operators: MobileOperator[] = MOBILE_OPERATORS;

  public getOperatorById(id: number = -1): MobileOperator | null {
    const operator = this.operators.filter(item => item.id === id);
    return operator ? operator[0] : null;
  }

  public getAllOperators(): MobileOperator[] {
    return this.operators;
  }
}
