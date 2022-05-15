import { TestBed } from '@angular/core/testing';

import { CookiesGuard } from './cookies.guard';

describe('CookiesGuard', () => {
  let guard: CookiesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CookiesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
