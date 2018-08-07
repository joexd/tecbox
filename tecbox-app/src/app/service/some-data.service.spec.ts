import { TestBed, inject } from '@angular/core/testing';

import { SomeDataService } from './some-data.service';
import {HttpClientModule} from "@angular/common/http";

describe('SomeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [SomeDataService]
    });
  });

  it('should be created', inject([SomeDataService], (service: SomeDataService) => {
    expect(service).toBeTruthy();
  }));
});
