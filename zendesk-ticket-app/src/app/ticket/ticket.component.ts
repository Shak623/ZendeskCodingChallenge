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
  displayLoading: boolean = true;

  constructor(private ticketsService: TicketsService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getCount();
    this.getTicket();
  }

  /*
  Get the ticket with id from route params
  */
  getTicket(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ticketsService.getTicket(id).subscribe(s => {
      if (s) {
        this.hideLoader();    // hide loading spinner
      }
      this.ticket = s;
    })
  }

  /*
  Get the number of tickets in the zendesk api
  */
  getCount(): void {
    this.ticketsService.getCount().subscribe(s => {
      this.count = s;
    })
  }

  /*
  Go to the previous ticket (id - 1)
  */
  goPrev(id: number): void {
    window.location.href = `${window.location.protocol}//${window.location.host}/ticket/${id - 1}`;
  }

  /*
  Go to the next ticekt (id + 1)
  */
  goNext(id: number): void {
    window.location.href = `${window.location.protocol}//${window.location.host}/ticket/${id + 1}`;
  }

  /*
  Go back to the list of tickets
  */
  goBack(): void {
    window.location.href = `${window.location.protocol}//${window.location.host}/tickets`;
  }

  // hide the loading spinner
  hideLoader(): void {
    this.displayLoading = false;
  }

}
