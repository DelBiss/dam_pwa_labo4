import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasureConvertionComponent } from './measure-convertion.component';

describe('ConvertionComponent', () => {
  let component: MeasureConvertionComponent;
  let fixture: ComponentFixture<MeasureConvertionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasureConvertionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasureConvertionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
