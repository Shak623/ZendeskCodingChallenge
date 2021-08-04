import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { mockCountModel1 } from '../models/CountResponseModel.mocks';
import { mockTicketModel1 } from '../models/TicketResponseModel.mocks';

import { TicketsService } from './tickets.service';

describe('TicketsService', () => {
  let service: TicketsService;
  let httpTestingController: HttpTestingController;

  const url = `${environment.apiUrl}`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(TicketsService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get tickets', (done) => {
    const expectedData = [mockTicketModel1];

    service.getTickets().subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne(`${url}/api/tickets`);

    testRequest.flush(expectedData);
  })

  it('should get ticket', (done) => {
    const expectedData = mockTicketModel1;

    service.getTicket(mockTicketModel1.id).subscribe(data => {
      expect(data).toEqual(mockTicketModel1);
      done();
    });

    const testRequest = httpTestingController.expectOne(`${url}/api/ticket/${mockTicketModel1.id}`);

    testRequest.flush(expectedData);
  })

  it('should get count', (done) => {
    const expectedData = mockCountModel1;

    service.getCount().subscribe(data => {
      expect(data).toEqual(mockCountModel1);
      done();
    });

    const testRequest = httpTestingController.expectOne(`${url}/api/tickets/count`);

    testRequest.flush(expectedData);
  })
});
