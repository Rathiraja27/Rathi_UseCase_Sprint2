import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AirlineComponent } from './airline.component';
import { Airlineroutes } from '../routing/airlineroutes';

@NgModule({
    declarations: [
        AirlineComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(Airlineroutes),
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AirlineComponent]
})
export class AirlineModule { }