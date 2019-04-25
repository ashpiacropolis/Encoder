import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantContainerComponent } from './applicant-container.component';

describe('ApplicantContainerComponent', () => {
  let component: ApplicantContainerComponent;
  let fixture: ComponentFixture<ApplicantContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
