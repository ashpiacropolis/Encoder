import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremedDetailsComponent } from './premed-details.component';

describe('PremedDetailsComponent', () => {
  let component: PremedDetailsComponent;
  let fixture: ComponentFixture<PremedDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremedDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
