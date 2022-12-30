import { TestBed } from '@angular/core/testing';

import { SubjectObserveStudyServiceService } from './subject-observe-study-service.service';

describe('SubjectObserveStudyServiceService', () => {
  let service: SubjectObserveStudyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectObserveStudyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
