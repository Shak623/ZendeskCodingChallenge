import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketComponent } from './ticket.component';
import { mockTicketModel1 } from '../models/TicketResponseModel.mocks';
import { mockCountModel1 } from '../models/CountResponseModel.mocks';
import { MockTicketsService, MockTicketsServiceAPIError } from '../services/tickets.service.mock';
import { TicketsService } from '../services/tickets.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

function compileTestBed() {
  TestBed.compileComponents();
  let route = TestBed.inject(ActivatedRoute);
  let fixture = TestBed.createComponent(TicketComponent);
  let component = fixture.componentInstance;
  fixture.detectChanges();
  return {route, fixture, component}
}

describe('TicketComponent', () => {
  let component: TicketComponent;
  let fixture: ComponentFixture<TicketComponent>;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketComponent ],
      providers: [
        { provide: TicketsService, useValue: new MockTicketsService()}, 
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ]
    })
  });


  it('should create', () => {
    let obj = compileTestBed();
    route = obj.route;
    fixture = obj.fixture;
    component = obj.component;
    expect(component).toBeTruthy();
  });

  //Test getCount()
  it('should get count response', () => {
    let obj = compileTestBed();
    route = obj.route;
    fixture = obj.fixture;
    component = obj.component;
    component.getCount();
    expect(component.count).toEqual(mockCountModel1);
  })

  // Test goPrev()
  it('should go to previous page', () => {
    let obj = compileTestBed();
    route = obj.route;
    fixture = obj.fixture;
    component = obj.component;
    const prevSpy = spyOn(component, 'goPrev');
    component.goPrev(1);
    expect(prevSpy).toHaveBeenCalledWith(1);
  })

  //Test goNext()
  it('should go to next page', () => {
    let obj = compileTestBed();
    route = obj.route;
    fixture = obj.fixture;
    component = obj.component;
    const nextSpy = spyOn(component, 'goNext');
    component.goNext(1);
    expect(nextSpy).toHaveBeenCalledWith(1);
  })

  //Test goBack()
  it('should go back to tickets page', () => {
    let obj = compileTestBed();
    route = obj.route;
    fixture = obj.fixture;
    component = obj.component;
    const backSpy = spyOn(component, 'goBack');
    component.goBack();
    expect(backSpy).toHaveBeenCalled();
  })

  //Test hideLoader()
  it('should hide displayLoading', () => {
    let obj = compileTestBed();
    route = obj.route;
    fixture = obj.fixture;
    component = obj.component;
    component.displayLoading = true;
    expect(component.displayLoading).toBeTruthy();
    component.hideLoader();
    expect(component.displayLoading).toBeFalsy();
  })

  //Test setMessage()
  it('should set the message', () => {
    let obj = compileTestBed();
    route = obj.route;
    fixture = obj.fixture;
    component = obj.component;
    let msg = "This is a test";
    expect(component.message).not.toBe(msg);
    component.setMessage(msg);
    expect(component.message).toEqual(msg);
  })

  //Test errorHasOccurred()
  it('should set error to be true', () => {
    let obj = compileTestBed();
    route = obj.route;
    fixture = obj.fixture;
    component = obj.component;
    component.error = false;
    expect(component.error).toBeFalsy();
    component.errorHasOccurred();
    expect(component.error).toBeTruthy();
  })

  //Test setErrorStatus()
  it('should set error status', () => {
    let obj = compileTestBed();
    route = obj.route;
    fixture = obj.fixture;
    component = obj.component;
    let status = 404;
    expect(component.errorStatus).not.toBe(status);
    component.setErrorStatus(status);
    expect(component.errorStatus).toEqual(status);
  })

  //Test getTicket()
  it('should get API error', () => {
    TestBed.overrideProvider(TicketsService, {useValue: new MockTicketsServiceAPIError});
    let obj = compileTestBed();
    route = obj.route;
    fixture = obj.fixture;
    component = obj.component;
    component.getTicket();
    expect(component.error).toBeTruthy();
    expect(component.errorStatus).toEqual(1);
    expect(component.message).toBe("There was an issue connecting to the API. Come back later and try again.");
  })
});
