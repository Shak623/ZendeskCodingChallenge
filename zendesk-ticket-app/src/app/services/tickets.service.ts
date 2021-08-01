import { ContentObserver } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CountResponseModel } from '../models/CountResponseModel';
import { TicketResponseModel } from '../models/TicketResponseModel';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private httpClient: HttpClient) { }

  getTickets(): Observable<TicketResponseModel[]> {
    const url = `${environment.apiUrl}/api/tickets`
    return this.httpClient.get<TicketResponseModel[]>(url);
  }

  getTicket(id: number): Observable<TicketResponseModel> {
    const url = `${environment.apiUrl}/api/ticket/${id}`
    return this.httpClient.get<TicketResponseModel>(url);
  }

  getCount(): Observable<CountResponseModel> {
    const url = `${environment.apiUrl}/api/tickets/count`;
    return this.httpClient.get<CountResponseModel>(url);
  }
}
