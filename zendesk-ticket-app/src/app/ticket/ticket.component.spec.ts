import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketComponent } from './ticket.component';
import { mockTicketModel1 } from '../models/TicketResponseModel.mocks';
import { mockCountModel1 } from '../models/CountResponseModel.mocks';
import { MockTicketsService } from '../services/tickets.service.mock';
import { TicketsService } from '../services/tickets.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('TicketComponent', () => {
  let component: TicketComponent;
  let fixture: ComponentFixture<TicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketComponent ],
      providers: [
        { provide: TicketsService, useClass: MockTicketsService}, 
        { provide: ActivatedRoute, useValue: {
          snapshot: {params: {id: '1'}}
        }}
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
