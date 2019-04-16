import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncoderSmsComponent } from './encoder-sms.component';

describe('EncoderSmsComponent', () => {
  let component: EncoderSmsComponent;
  let fixture: ComponentFixture<EncoderSmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncoderSmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncoderSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
