import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllagentsComponent } from './allagents.component';

describe('AllagentsComponent', () => {
  let component: AllagentsComponent;
  let fixture: ComponentFixture<AllagentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllagentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllagentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
