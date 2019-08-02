import { TestBed } from '@angular/core/testing';

import { AdminFilmsService } from './admin-films.service';

describe('AdminFilmsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminFilmsService = TestBed.get(AdminFilmsService);
    expect(service).toBeTruthy();
  });
});
