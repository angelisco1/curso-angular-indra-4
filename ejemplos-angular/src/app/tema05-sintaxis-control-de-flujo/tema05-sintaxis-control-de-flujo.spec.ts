import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema05SintaxisControlDeFlujo } from './tema05-sintaxis-control-de-flujo';

describe('Tema05SintaxisControlDeFlujo', () => {
  let component: Tema05SintaxisControlDeFlujo;
  let fixture: ComponentFixture<Tema05SintaxisControlDeFlujo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tema05SintaxisControlDeFlujo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tema05SintaxisControlDeFlujo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
