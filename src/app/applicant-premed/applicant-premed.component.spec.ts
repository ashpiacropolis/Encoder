import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantPremedComponent } from './applicant-premed.component';

describe('ApplicantPremedComponent', () => {
  let component: ApplicantPremedComponent;
  let fixture: ComponentFixture<ApplicantPremedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantPremedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantPremedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
