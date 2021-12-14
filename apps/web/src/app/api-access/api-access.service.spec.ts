import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ApiAccessService } from './api-access.service';

fdescribe('ApiAccessService', () => {
  let service: ApiAccessService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiAccessService]
    });

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ApiAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call api', () => {
    service.get(3).subscribe();
    const req = httpMock.expectOne(`${service.API_URL}/3`);
    expect(req.request.method).toBe("GET");
  });
});
