import { TestBed } from '@angular/core/testing';

import { AuthFetchInterceptor } from './interceptor.service';

describe('AuthFetchInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthFetchInterceptor = TestBed.get(AuthFetchInterceptor);
    expect(service).toBeTruthy();
  });
});
