import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantsContainerComponent } from './applicants-container.component';

describe('ApplicantsContainerComponent', () => {
  let component: ApplicantsContainerComponent;
  let fixture: ComponentFixture<ApplicantsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
