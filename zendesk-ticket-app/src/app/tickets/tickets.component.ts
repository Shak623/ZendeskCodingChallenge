import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'
import { Router } from '@angular/router';
import { TicketResponseModel } from '../models/TicketResponseModel';
import { TicketsService } from '../services/tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit, AfterViewInit {

  ticketsArray: TicketResponseModel[] = [];
  displayedColumns: string[] = ["id", "subject", "updated_at", "status"];
  message: string = ""
  displayLoading: boolean = true;
  error: boolean = false;
  errorStatus: number = 0;

  dataSource: MatTableDataSource<TicketResponseModel> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private ticketsService: TicketsService, private router: Router) { }

  ngOnInit(): void {
    this.getTickets();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getTickets(): void {
    this.ticketsService.getTickets().subscribe(s => {
      if (s.error) {
        this.errorHasOccurred();
        this.setErrorStatus(s.status);
        switch (s.error) {                              // Handle error messaging
          case "APIConnectionError":
            this.setMessage("There was an issue connecting to the API. \
              Come back later and try again.");
            break;
          case "Couldn't authenticate you":
            this.setMessage("You do not have authorization to view this site. \
              Check to see that you have authorization and come back again.");
            break;
          default:
            this.setMessage(`An error has occurred: ${s.error}`);
            break;
        }
      }
      else {
        this.ticketsArray = s;
        if (this.ticketsArray.length == 0){
          this.setMessage("There are no tickets for your account.");
        }
        this.dataSource.data = this.ticketsArray;
      }
      this.hideLoader();
    })
  }

  displayData(id: number) {
    this.router.navigate([`../ticket/${id}`]);
  }

  hideLoader() {
    this.displayLoading = false;
  }

  errorHasOccurred() {
    this.error = true;
  }

  setMessage(msg: string){
    this.message = msg;
  }

  setErrorStatus(status: number) {
    this.errorStatus = status;
  }

}
