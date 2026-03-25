import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema04Pipes } from './tema04-pipes';

describe('Tema04Pipes', () => {
  let component: Tema04Pipes;
  let fixture: ComponentFixture<Tema04Pipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tema04Pipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tema04Pipes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
