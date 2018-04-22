import { TestBed, inject } from '@angular/core/testing';

import { StorageApiService } from './storage-api.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from "@angular/common/http/testing"

describe('ApiMethodsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [StorageApiService]
    });
  });

  it('should be created', inject([StorageApiService], (service: StorageApiService) => {
    expect(service).toBeTruthy();
  }));
});
