import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantPassportComponent } from './applicant-passport.component';

describe('ApplicantPassportComponent', () => {
  let component: ApplicantPassportComponent;
  let fixture: ComponentFixture<ApplicantPassportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantPassportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantPassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
