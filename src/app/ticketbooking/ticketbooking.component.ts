import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking/booking.model';
import { HttpClient } from '@angular/common/http';
import { Schedule } from '../schedules/schedules.model';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-ticketbooking',
  templateUrl: './ticketbooking.component.html',
})
export class TicketbookingComponent implements OnInit {

  constructor(private http: HttpClient, private _router :Router) { }

  ngOnInit(): void {
  }

  bookingModel : Booking = new Booking();
  bookingModels : Array<Booking> = new Array<Booking>();
  scheduleModel : Schedule = new Schedule();
  scheduleModels: Array<Schedule> = new Array<Schedule>();

  AddBooking(booking : Booking){

  }

  GetSchedules(){
    this.http.get("https://localhost:44348/gateway/api/1.0/flight/schedules").subscribe(res => this.GetFromServer(res), res => console.log(res));
  }

  OnSelect(event : Event)
  {
    this.scheduleModel.flightId = Number((event.target as HTMLInputElement).value);
  }

  GetFromServer(res: any) {
    console.log(res);
    this.scheduleModels = res;
  }

  Navigate(booking : Booking)
  {
    this._router.navigate(['passenger/details']);
  }
}
