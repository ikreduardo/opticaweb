import { TestBed } from '@angular/core/testing';

import { DataauthService } from './dataauth.service';

describe('DataauthService', () => {
  let service: DataauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
