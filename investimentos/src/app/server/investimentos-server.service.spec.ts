import { TestBed } from '@angular/core/testing';

import { InvestimentosServerService } from './investimentos-server.service';

describe('InvestimentosServerService', () => {
  let service: InvestimentosServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestimentosServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
