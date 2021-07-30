import { Component, OnInit } from '@angular/core';
import { TicketResponseModel } from '../models/TicketResponseModel';
import { TicketsService } from '../services/tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  ticketsArray: TicketResponseModel[] = [];
  emptyMessage: string = "There are no tickets for your account."

  constructor(private ticketsService: TicketsService) { }

  ngOnInit(): void {
    this.ticketsService.getTickets().subscribe(s => {
      this.ticketsArray = s;
      if (this.ticketsArray.length > 0){
        this.emptyMessage = "";
      }
      console.log(this.ticketsArray);
    })
  }

}
