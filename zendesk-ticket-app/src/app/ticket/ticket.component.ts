import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketResponseModel } from '../models/TicketResponseModel';
import { TicketsService } from '../services/tickets.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  ticket!: TicketResponseModel;
  message: string = "";

  constructor(private ticketsService: TicketsService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getTicket();
  }

  getTicket(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ticketsService.getTicket(id).subscribe(s => {
      this.ticket = s;
    })
  }

}
