import { TestBed } from '@angular/core/testing';
import { AccountService2 } from './account-service2';

describe('AccountService2', () => {
  let service: AccountService2;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountService2);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
