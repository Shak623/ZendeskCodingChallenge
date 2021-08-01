import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountResponseModel } from '../models/CountResponseModel';
import { TicketResponseModel } from '../models/TicketResponseModel';
import { TicketsService } from '../services/tickets.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  ticket!: TicketResponseModel;
  count!: CountResponseModel;
  message: string = "";

  constructor(private ticketsService: TicketsService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getCount();
    this.getTicket();
  }

  getTicket(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ticketsService.getTicket(id).subscribe(s => {
      this.ticket = s;
    })
  }

  getCount(): void {
    this.ticketsService.getCount().subscribe(s => {
      this.count = s;
    })
  }

  goPrev(id: number): void {
    window.location.href = `${window.location.protocol}//${window.location.host}/ticket/${id - 1}`;
  }

  goNext(id: number): void {
    window.location.href = `${window.location.protocol}//${window.location.host}/ticket/${id + 1}`;
  }

}
