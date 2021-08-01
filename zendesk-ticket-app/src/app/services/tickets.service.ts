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

  getTickets(): Observable<any> {
    const url = `${environment.apiUrl}/api/tickets`
    return this.httpClient.get<any>(url);
  }

  getTicket(id: number): Observable<any> {
    const url = `${environment.apiUrl}/api/ticket/${id}`
    return this.httpClient.get<any>(url);
  }

  getCount(): Observable<any> {
    const url = `${environment.apiUrl}/api/tickets/count`;
    return this.httpClient.get<any>(url);
  }
}
