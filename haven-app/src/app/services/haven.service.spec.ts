import { TestBed } from '@angular/core/testing';

import { HavenService } from './haven.service';

describe('HavenService', () => {
  let service: HavenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HavenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
