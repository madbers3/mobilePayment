import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { OperatorComponent } from './operator/operator.component';

import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask';
import { InfoSnackbarComponent } from './info-snackbar/info-snackbar.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'operator/:id', component: OperatorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OperatorComponent,
    InfoSnackbarComponent,
  ],
  entryComponents: [
    InfoSnackbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    TextMaskModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
