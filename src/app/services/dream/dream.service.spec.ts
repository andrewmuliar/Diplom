/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DreamService } from './dream.service';

describe('Service: Dream', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DreamService]
    });
  });

  it('should ...', inject([DreamService], (service: DreamService) => {
    expect(service).toBeTruthy();
  }));
});