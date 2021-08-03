import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TicketsService } from '../services/tickets.service';
import { MockTicketsService } from '../services/tickets.service.mock';

import { TicketsComponent } from './tickets.component';

function compileTestBed() {
  TestBed.compileComponents();
  let fixture = TestBed.createComponent(TicketsComponent);
  let component = fixture.componentInstance;
  fixture.detectChanges();
  return { fixture, component}
}

describe('TicketsComponent', () => {
  let component: TicketsComponent;
  let fixture: ComponentFixture<TicketsComponent>;
  let routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsComponent ],
      providers: [
        { provide: TicketsService, useValue: new MockTicketsService() },
        { provide: Router, useValue: routerSpy}
      ],
    })
  });

  it('should create', () => {
    let obj = compileTestBed();
    fixture = obj.fixture;
    component = obj.component;
    expect(component).toBeTruthy();
  });

  //Test displayData()
  it('should navigate to ticket', () => {
    let obj = compileTestBed();
    fixture = obj.fixture;
    component = obj.component;
    component.displayData(0);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['../ticket/0']);
  })

  //Test hideLoader()
  it('should hide loader', () => {
    let obj = compileTestBed();
    fixture = obj.fixture;
    component = obj.component;
    component.displayLoading = true;
    component.hideLoader();
    expect(component.displayLoading).toBeFalsy();
  })

  //Test setMessage()
  it('should set the message', () => {
    let obj = compileTestBed();
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
    fixture = obj.fixture;
    component = obj.component;
    let status = 404;
    expect(component.errorStatus).not.toBe(status);
    component.setErrorStatus(status);
    expect(component.errorStatus).toEqual(status);
  })


});
