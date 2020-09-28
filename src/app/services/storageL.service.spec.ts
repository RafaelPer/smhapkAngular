import { TestBed } from '@angular/core/testing';

import { SecureStoreService } from './storageL.service';

describe('SecureStoreService', () => {
  let service: SecureStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecureStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
