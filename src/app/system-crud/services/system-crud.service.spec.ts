import { TestBed } from '@angular/core/testing';

import { SystemCrudService } from './system-crud.service';

describe('SystemCrudService', () => {
  let service: SystemCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
