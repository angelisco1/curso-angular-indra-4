import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMeme } from './new-meme';

describe('NewMeme', () => {
  let component: NewMeme;
  let fixture: ComponentFixture<NewMeme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewMeme]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewMeme);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
