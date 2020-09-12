import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModule } from './main/main.module';
import { OperatorModule } from './operator/operator.module';
import { OperatorsService } from './operators.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainModule,
    OperatorModule,
  ],
  providers: [
    OperatorsService
  ]
})
export class MobileReplenishModule {
}
