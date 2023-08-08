import { TestBed } from '@angular/core/testing';

import { TestEdgeService } from './test-edge.service';

describe('TestEdgeService', () => {
  let service: TestEdgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestEdgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
