import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema08Referencias } from './tema08-referencias';

describe('Tema08Referencias', () => {
  let component: Tema08Referencias;
  let fixture: ComponentFixture<Tema08Referencias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tema08Referencias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tema08Referencias);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
