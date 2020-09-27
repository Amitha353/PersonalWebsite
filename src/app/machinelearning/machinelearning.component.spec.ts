import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinelearningComponent } from './machinelearning.component';

describe('MachinelearningComponent', () => {
  let component: MachinelearningComponent;
  let fixture: ComponentFixture<MachinelearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachinelearningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinelearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
