import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesfoundComponent } from './matchesfound.component';

describe('MatchesfoundComponent', () => {
  let component: MatchesfoundComponent;
  let fixture: ComponentFixture<MatchesfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchesfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchesfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
