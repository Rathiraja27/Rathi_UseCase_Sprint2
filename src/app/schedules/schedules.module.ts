import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { SchedulesComponent } from './schedules.component';
import { Scheduleroutes } from '../routing/scheduleroutes';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        SchedulesComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(Scheduleroutes),
        HttpClientModule,
        
    ],
    providers: [],
    bootstrap: [SchedulesComponent]
})
export class ScheduleModule { }