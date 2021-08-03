import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  error: boolean = false;
  errorStatus: number = 0;

  constructor(private ticketsService: TicketsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCount();
    this.getTicket();
  }

  /*
  Get the ticket with id from route params
  */
  getTicket(): void {
    const id = Number(this.route.snapshot.params.id);
    this.ticketsService.getTicket(id).subscribe(s => {
      if (s.error) {
        this.errorHasOccurred();
        this.setErrorStatus(s.status);
        switch (s.error) {                              // Handle error messaging
          case "APIConnectionError":
            this.setMessage("There was an issue connecting to the API. Come back later and try again.");
            break;
          case "Couldn't authenticate you":
            this.setMessage("You do not have authorization to view this site. Check to see that you have authorization and come back again.");
            break;
          case "RecordNotFound":
            this.setMessage("Could not find the ticket you are looking for. It may not exist.");
            break;
          default:
            this.setMessage(`An error has occurred: ${s.error}`);
            break;
        }
      }
      else {
        this.ticket = s;
      }
      this.hideLoader();
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

  // set message to msg
  setMessage(msg: string) {
    this.message = msg;
  }

  // set error to true
  errorHasOccurred() {
    this.error = true;
  }

  // set the error status
  setErrorStatus(status: number) {
    this.errorStatus = status;
  }

}
