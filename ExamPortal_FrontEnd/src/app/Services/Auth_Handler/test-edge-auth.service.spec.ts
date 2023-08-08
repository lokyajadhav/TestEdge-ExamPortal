import { TestBed } from '@angular/core/testing';

import { TestEdgeAuthService } from './test-edge-auth.service';

describe('TestEdgeAuthService', () => {
  let service: TestEdgeAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestEdgeAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
