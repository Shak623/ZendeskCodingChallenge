import { Observable, of } from "rxjs";
import { mockCountModel1 } from "../models/CountResponseModel.mocks";
import { mockErrorModel1, mockTicketModel1 } from "../models/TicketResponseModel.mocks";

export class MockTicketsService {
    getTickets(): Observable<any> {
        return of([mockTicketModel1]);
    }

    getTicket(): Observable<any> {
        return of(mockTicketModel1);
    }

    getCount(): Observable<any> {
        return of(mockCountModel1);
    }
}

export class MockTicketsServiceAPIError {
    getTickets(): Observable<any> {
        return of(mockErrorModel1);
    }

    getTicket(): Observable<any> {
        return of(mockErrorModel1);
    }

    getCount(): Observable<any> {
        return of(mockErrorModel1);
    }
}