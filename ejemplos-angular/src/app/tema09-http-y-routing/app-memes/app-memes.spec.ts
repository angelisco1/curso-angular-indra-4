import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMemes } from './app-memes';

describe('AppMemes', () => {
  let component: AppMemes;
  let fixture: ComponentFixture<AppMemes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppMemes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppMemes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
