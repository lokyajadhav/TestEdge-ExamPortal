import { TestBed } from '@angular/core/testing';

import { TestEdgeInterceptor } from './test-edge.interceptor';

describe('TestEdgeInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TestEdgeInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TestEdgeInterceptor = TestBed.inject(TestEdgeInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
