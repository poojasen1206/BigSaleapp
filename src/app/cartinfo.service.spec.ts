import { TestBed } from '@angular/core/testing';

import { CartinfoService } from './cartinfo.service';

describe('CartinfoService', () => {
  let service: CartinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
