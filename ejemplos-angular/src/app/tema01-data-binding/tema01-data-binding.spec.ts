import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema01DataBinding } from './tema01-data-binding';

describe('Tema01DataBinding', () => {
  let component: Tema01DataBinding;
  let fixture: ComponentFixture<Tema01DataBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tema01DataBinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tema01DataBinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
