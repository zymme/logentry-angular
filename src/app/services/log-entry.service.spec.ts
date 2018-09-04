import { TestBed, inject } from '@angular/core/testing';

import { LogEntryService } from './log-entry.service';

describe('LogEntryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogEntryService]
    });
  });

  it('should be created', inject([LogEntryService], (service: LogEntryService) => {
    expect(service).toBeTruthy();
  }));
});
