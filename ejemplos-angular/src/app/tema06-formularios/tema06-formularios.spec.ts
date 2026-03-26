import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema06Formularios } from './tema06-formularios';

describe('Tema06Formularios', () => {
  let component: Tema06Formularios;
  let fixture: ComponentFixture<Tema06Formularios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tema06Formularios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tema06Formularios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
