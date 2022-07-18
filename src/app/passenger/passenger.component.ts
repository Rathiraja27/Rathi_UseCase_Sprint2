import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Schedule } from '../schedules/schedules.model';
import { Passenger } from './passenger.model';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
})
export class PassengerComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  passengerModel : Passenger = new Passenger();
  passengerModels : Array<Passenger> = new  Array<Passenger>();
  scheduleModel : Schedule = new Schedule();
  scheduleModels: Array<Schedule> = new Array<Schedule>();

  OnSelect(event : Event)
  {
    this.scheduleModel.flightId = Number((event.target as HTMLInputElement).value);
  }

  SearchFlight(passenger : Passenger)
  {
    console.log(passenger);
    //let httparms = new HttpParams().set("fromPlace", passenger.fromLocation).set("toPlace", passenger.toLocation);
    let httparms = new HttpParams();
    httparms = httparms.append('fromPlace', passenger.fromLocation)
    httparms = httparms.append('toPlace', passenger.toLocation);

    return this.http.get("https://localhost:44348/gateway/api/1.0/flight/search", {params: httparms});
    //let options = { httparms };
    //this.http.post("https://localhost:44348/gateway/api/1.0/flight/search",  httparms).subscribe(res => this.GetSchedulesFromServer(res) , res => console.log(res));
  }

  GetSchedulesFromServer(res: any) {
    console.log(res);
    this.scheduleModels = res;
  }
}
