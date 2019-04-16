import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddapplicantsComponent } from './addapplicants.component';

describe('AddapplicantsComponent', () => {
  let component: AddapplicantsComponent;
  let fixture: ComponentFixture<AddapplicantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddapplicantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddapplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
