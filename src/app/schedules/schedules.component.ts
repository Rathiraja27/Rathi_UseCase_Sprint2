import { Component, OnInit } from '@angular/core';
import { Schedule } from './schedules.model';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Airline } from '../airline/airline.model';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
})
export class SchedulesComponent implements OnInit {

  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.GetSchedules();
    this.GetAirlines();
  }

  scheduleModel : Schedule = new Schedule();
  scheduleModels: Array<Schedule> = new Array<Schedule>();

  ViewDetails(schedule : Schedule){
    this.scheduleModel = schedule;
  }

  airlineModel : Airline = new Airline();
  airlineModels: Array<Airline> = new Array<Airline>();
  EditButton : boolean = false;

  GetAirlines(){
    this.http.get("https://localhost:44348/gateway/api/1.0/flight/airlines").subscribe(res => this.GetAirlinesFromServer(res), res => console.log(res));
  }

  GetAirlinesFromServer(res: any) {
    console.log(res);
    this.airlineModels = res;
  }

  GetSchedules(){
    this.http.get("https://localhost:44348/gateway/api/1.0/flight/schedules").subscribe(res => this.GetFromServer(res), res => console.log(res));
  }

  OnSelect(event : Event)
  {
    this.scheduleModel.airline = (event.target as HTMLInputElement).value;
  }

  GetFromServer(res: any) {
    console.log(res);
    this.scheduleModels = res;
  }

  AddInventory() {
      var scheduledto = {
        flightName : this.scheduleModel.flightName,
        instrumentUsed: this.scheduleModel.instrumentUsed,
        airlineId: Number(this.scheduleModel.airline),
        fromPlace: this.scheduleModel.fromPlace,
        toPlace:this.scheduleModel.toPlace,
        startDateTime: new Date(this.scheduleModel.startDateTime),
        endDateTime: new Date(this.scheduleModel.endDateTime),
        sceduledDays:this.scheduleModel.sceduledDays,
        businessClassSeats:Number(this.scheduleModel.businessClassSeats),
        nonBusinessClassSeats:Number(this.scheduleModel.nonBusinessClassSeats),
        ticketPrice:Number(this.scheduleModel.ticketPrice),
        rows:Number(this.scheduleModel.rows),
        meal:this.scheduleModel.meal,
      }

      console.log(scheduledto);
      console.log(this.scheduleModel);
      this.http.post("https://localhost:44348/gateway/api/1.0/flight/airline/inventory/add", scheduledto).subscribe(res => { this.GetSchedules(); console.log(res) }, res => console.log(res));
      this.scheduleModel = new Schedule();
    }

    
    selectedState= '';
	  onSelected(value:string): void {
		this.selectedState = value;

	}
}

