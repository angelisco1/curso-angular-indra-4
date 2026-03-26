import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema07Servicios } from './tema07-servicios';

describe('Tema07Servicios', () => {
  let component: Tema07Servicios;
  let fixture: ComponentFixture<Tema07Servicios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tema07Servicios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tema07Servicios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
