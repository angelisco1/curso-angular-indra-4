import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema03InputOutput } from './tema03-input-output';

describe('Tema03InputOutput', () => {
  let component: Tema03InputOutput;
  let fixture: ComponentFixture<Tema03InputOutput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tema03InputOutput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tema03InputOutput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
