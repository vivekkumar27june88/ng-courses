import { TestBed, async, inject } from '@angular/core/testing';

import { AccountCreateGuard } from './account-create.guard';

describe('AccountCreateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountCreateGuard]
    });
  });

  it('should ...', inject([AccountCreateGuard], (guard: AccountCreateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
