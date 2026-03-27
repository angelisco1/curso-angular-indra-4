import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeList } from './meme-list';

describe('MemeList', () => {
  let component: MemeList;
  let fixture: ComponentFixture<MemeList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemeList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemeList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
