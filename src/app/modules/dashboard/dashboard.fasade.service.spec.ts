import { TestBed } from '@angular/core/testing';

import { DashboardFasadeService } from './dashboard.fasade.service';

describe('DashboardFasadeService', () => {
  let service: DashboardFasadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardFasadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
