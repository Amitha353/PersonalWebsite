import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfinformationComponent } from './selfinformation.component';

describe('SelfinformationComponent', () => {
  let component: SelfinformationComponent;
  let fixture: ComponentFixture<SelfinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
