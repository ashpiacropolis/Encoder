import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindapplicantComponent } from './findapplicant.component';

describe('FindapplicantComponent', () => {
  let component: FindapplicantComponent;
  let fixture: ComponentFixture<FindapplicantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindapplicantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindapplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
