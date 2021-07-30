import { ContentObserver } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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
}
