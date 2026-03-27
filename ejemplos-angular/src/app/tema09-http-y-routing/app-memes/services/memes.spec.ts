import { TestBed } from '@angular/core/testing';

import { Memes } from './memes';

describe('Memes', () => {
  let service: Memes;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Memes);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
