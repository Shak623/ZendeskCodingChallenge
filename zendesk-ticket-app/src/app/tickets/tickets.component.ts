import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'
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
  emptyMessage: string = ""

  dataSource: MatTableDataSource<TicketResponseModel> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private ticketsService: TicketsService) { }

  ngOnInit(): void {
    this.ticketsService.getTickets().subscribe(s => {
      this.ticketsArray = s;
      if (this.ticketsArray.length == 0){
        this.emptyMessage = "There are no tickets for your account.";
      }
      this.dataSource.data = this.ticketsArray;
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
