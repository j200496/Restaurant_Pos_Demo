import { TestBed } from '@angular/core/testing';

import { VentaserviceService } from './ventaservice.service';

describe('VentaserviceService', () => {
  let service: VentaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
