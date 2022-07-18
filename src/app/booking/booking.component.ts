import { HttpClient, HttpParams} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Schedule } from '../schedules/schedules.model';
import { Booking } from './booking.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
})
export class BookingComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.GetBooking();
    this.GetSchedules();
  }

  bookingModel : Booking = new Booking();
  bookingModels: Array<Booking> = new Array<Booking>();
  scheduleModel : Schedule = new Schedule();
  scheduleModels: Array<Schedule> = new Array<Schedule>();

  GetBooking(){
    this.http.get("https://localhost:44348/gateway/api/1.0/flight/booking/bookedHistory").subscribe(res => this.GetFromServer(res), res => console.log(res));
  }

  GetFromServer(res: any) {
    console.log(res);
    this.bookingModels = res;
  }

  GetSchedules(){
    this.http.get("https://localhost:44348/gateway/api/1.0/flight/schedules").subscribe(res => this.GetSchedulesFromServer(res), res => console.log(res));
  }

  GetSchedulesFromServer(res: any) {
    console.log(res);
    this.scheduleModels = res;

    // for(var val of this.bookingModels)
    // {
    //     var data = this.scheduleModels.filter(x=> x.flightId == val.flightId);
    //     if(data != null)
    //     {
    //        this.bookingModel.flightId = this.scheduleModel.flightId;
    //        this.bookingModel.price = Number(this.scheduleModel.ticketPrice)  * Number(this.bookingModel.seatsToBook);   
    //        this.bookingModel.startDateTime = this.scheduleModel.startDateTime;
    //        this.bookingModel.fromLocation = this.scheduleModel.fromPlace;
    //        this.bookingModel.toLocation = this.bookingModel.toLocation;
    //     }
    // }
  }

  ViewDetails(booking : Booking){

  }
}
