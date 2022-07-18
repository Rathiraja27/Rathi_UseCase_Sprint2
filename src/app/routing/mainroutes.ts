import { DashboardComponent } from "../dashboard/dashboard.component";
import { HomeComponent } from "../home/home.component";
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";
import { AuthguardService } from "../service/authguard.service";

export const Mainroutes = [
  {path:'',component: HomeComponent},
  {path:'home',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'dashboard',
  canActivate:[AuthguardService],component: DashboardComponent},
  {path: 'schedule', loadChildren:()=>import('../schedules/schedules.module').then(m=>m.ScheduleModule) },
  {path: 'airline', loadChildren:()=>import('../airline/airline.module').then(m=>m.AirlineModule) },
  {path: 'booking', loadChildren:()=>import('../booking/booking.module').then(m=>m.BookingModule) },
  {path: 'ticketbooking', loadChildren:()=>import('../ticketbooking/ticketbooking.module').then(m=>m.TicketbookingModule) },
  {path: 'passenger', loadChildren:()=>import('../passenger/passenger.module').then(m=>m.PassengerModule) },
];