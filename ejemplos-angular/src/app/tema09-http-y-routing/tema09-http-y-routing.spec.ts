import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema09HttpYRouting } from './tema09-http-y-routing';

describe('Tema09HttpYRouting', () => {
  let component: Tema09HttpYRouting;
  let fixture: ComponentFixture<Tema09HttpYRouting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tema09HttpYRouting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tema09HttpYRouting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
