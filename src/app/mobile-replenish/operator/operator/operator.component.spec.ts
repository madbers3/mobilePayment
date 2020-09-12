import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorComponent } from './operator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { InfoSnackbarComponent } from '../info-snackbar/info-snackbar.component';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import { OperatorsService } from '../../operators.service';
import { ReplenishPhoneService } from '../replenish-phone.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('OperatorComponent', () => {
  let component: OperatorComponent;
  let fixture: ComponentFixture<OperatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        OperatorComponent,
        InfoSnackbarComponent,
      ],
      imports: [
        CommonModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        TextMaskModule,
        MatButtonModule,
        MatInputModule,
        MatSnackBarModule,
        ReactiveFormsModule,
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
        {provide: APP_BASE_HREF, useValue: '/'},
        OperatorsService,
        ReplenishPhoneService
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
