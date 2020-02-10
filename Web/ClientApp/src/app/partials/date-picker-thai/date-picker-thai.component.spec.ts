import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerThaiComponent } from './date-picker-thai.component';

describe('DatePickerThaiComponent', () => {
  let component: DatePickerThaiComponent;
  let fixture: ComponentFixture<DatePickerThaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePickerThaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerThaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
