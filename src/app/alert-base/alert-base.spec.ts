import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertBase } from './alert-base';

describe('AlertBase', () => {
  let component: AlertBase;
  let fixture: ComponentFixture<AlertBase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertBase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertBase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
