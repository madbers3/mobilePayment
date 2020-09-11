import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorComponent } from './operator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appRoutes } from '../app.module';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MainComponent } from '../main/main.component';
import { InfoSnackbarComponent } from '../info-snackbar/info-snackbar.component';
import { AppComponent } from '../app.component';
import { APP_BASE_HREF } from '@angular/common';
import { RequesterService } from '../services/requester.service';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';

describe('OperatorComponent', () => {
  let component: OperatorComponent;
  let fixture: ComponentFixture<OperatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainComponent,
        OperatorComponent,
        InfoSnackbarComponent,
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(
          appRoutes,
          {enableTracing: true} // <-- debugging purposes only
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
      providers: [
        {
          provide: ActivatedRoute, useValue: {
            param: Observable.of({id: 1}),
            snapshot: {
              parent: {
                params: {
                  id: 1
                }
              },
              paramMap: {
                get(name: string): any {
                  return 1;
                }
              }
            },
          }
        },
        RequesterService,
        {provide: APP_BASE_HREF, useValue: '/'}
      ],

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
