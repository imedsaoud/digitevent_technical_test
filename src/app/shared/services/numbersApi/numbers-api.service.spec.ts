import { TestBed } from '@angular/core/testing';

import { NumbersApiService } from './numbers-api.service';

describe('NumbersApiService', () => {
  let service: NumbersApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumbersApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
