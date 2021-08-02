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
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketComponent ],
      providers: [
        { provide: TicketsService, useClass: MockTicketsService}, 
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    route = TestBed.inject(ActivatedRoute);
    fixture = TestBed.createComponent(TicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Test getCount()
  it('should get count response', () => {
    component.getCount();
    expect(component.count).toEqual(mockCountModel1);
  })

  // Test goPrev()
  it('should go to previous page', () => {
    const prevSpy = spyOn(component, 'goPrev');
    component.goPrev(1);
    expect(prevSpy).toHaveBeenCalledWith(1);
  })

  //Test goNext()
  it('should go to next page', () => {
    const nextSpy = spyOn(component, 'goNext');
    component.goNext(1);
    expect(nextSpy).toHaveBeenCalledWith(1);
  })

  //Test goBack()
  it('should go back to tickets page', () => {
    const backSpy = spyOn(component, 'goBack');
    component.goBack();
    expect(backSpy).toHaveBeenCalled();
  })

  //Test hideLoader()
  it('should hide displayLoading', () => {
    component.displayLoading = true;
    expect(component.displayLoading).toBeTruthy();
    component.hideLoader();
    expect(component.displayLoading).toBeFalsy();
  })

  //Test setMessage()
  it('should set the message', () => {
    let msg = "This is a test";
    expect(component.message).not.toBe(msg);
    component.setMessage(msg);
    expect(component.message).toEqual(msg);
  })

  //Test errorHasOccurred()
  it('should set error to be true', () => {
    component.error = false;
    expect(component.error).toBeFalsy();
    component.errorHasOccurred();
    expect(component.error).toBeTruthy();
  })

  //Test setErrorStatus()
  it('should set error status', () => {
    let status = 404;
    expect(component.errorStatus).not.toBe(status);
    component.setErrorStatus(status);
    expect(component.errorStatus).toEqual(status);
  })
});
