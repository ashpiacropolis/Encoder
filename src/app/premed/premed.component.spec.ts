import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremedComponent } from './premed.component';

describe('PremedComponent', () => {
  let component: PremedComponent;
  let fixture: ComponentFixture<PremedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
