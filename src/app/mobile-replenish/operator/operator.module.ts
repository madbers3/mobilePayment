import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorComponent } from './operator/operator.component';
import { InfoSnackbarComponent } from './info-snackbar/info-snackbar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TextMaskModule } from 'angular2-text-mask';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReplenishPhoneService } from './replenish-phone.service';

@NgModule({
  declarations: [
    OperatorComponent,
    InfoSnackbarComponent,
  ],
  entryComponents: [
    InfoSnackbarComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    TextMaskModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule,
  ],
  providers: [
    ReplenishPhoneService
  ]
})
export class OperatorModule {
}
