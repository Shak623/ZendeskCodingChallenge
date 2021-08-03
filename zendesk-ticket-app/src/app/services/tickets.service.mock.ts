import { Observable, of } from "rxjs";
import { mockCountModel1 } from "../models/CountResponseModel.mocks";
import { mockErrorModel1, mockErrorModel2, mockErrorModel3, mockErrorModel4, mockTicketModel1 } from "../models/TicketResponseModel.mocks";

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

export class MockTicketsServiceAuthError {
    getTickets(): Observable<any> {
        return of(mockErrorModel2);
    }

    getTicket(): Observable<any> {
        return of(mockErrorModel2);
    }

    getCount(): Observable<any> {
        return of(mockErrorModel2);
    }
}

export class MockTicketsServiceNotFoundError {
    getTickets(): Observable<any> {
        return of(mockErrorModel3);
    }

    getTicket(): Observable<any> {
        return of(mockErrorModel3);
    }

    getCount(): Observable<any> {
        return of(mockErrorModel3);
    }
}

export class MockTicketsServiceDefaultError {
    getTickets(): Observable<any> {
        return of(mockErrorModel4);
    }

    getTicket(): Observable<any> {
        return of(mockErrorModel4);
    }

    getCount(): Observable<any> {
        return of(mockErrorModel4);
    }
}