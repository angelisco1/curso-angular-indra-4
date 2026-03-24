import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema02Signals } from './tema02-signals';

describe('Tema02Signals', () => {
  let component: Tema02Signals;
  let fixture: ComponentFixture<Tema02Signals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tema02Signals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tema02Signals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
