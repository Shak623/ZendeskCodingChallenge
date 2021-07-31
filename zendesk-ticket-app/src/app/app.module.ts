import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketComponent } from './ticket/ticket.component';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

@NgModule({
  declarations: [
    AppComponent,
    TicketsComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatListModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
