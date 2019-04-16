import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonPremedComponent } from './non-premed.component';

describe('NonPremedComponent', () => {
  let component: NonPremedComponent;
  let fixture: ComponentFixture<NonPremedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonPremedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonPremedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
