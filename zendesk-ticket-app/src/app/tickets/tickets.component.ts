import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { TicketResponseModel } from '../models/TicketResponseModel';
import { TicketsService } from '../services/tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  ticketsArray: TicketResponseModel[] = [];
  displayedColumns: string[] = ["id", "subject", "updated_at", "status"];
  emptyMessage: string = "There are no tickets for your account."

  dataSource: MatTableDataSource<TicketResponseModel> = new MatTableDataSource();

  constructor(private ticketsService: TicketsService) { }

  ngOnInit(): void {
    this.ticketsService.getTickets().subscribe(s => {
      this.ticketsArray = s;
      if (this.ticketsArray.length > 0){
        this.emptyMessage = "";
      }
      this.dataSource.data = this.ticketsArray;
    })
  }

}
