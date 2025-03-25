import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FlightsComponent } from './components/flights/flights.component';
import { BookingComponent } from './components/booking/booking.component';
import { SupportComponent } from './components/support/support.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { ManageTripsComponent } from './components/manage-trips/manage-trips.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'flights', component: FlightsComponent },
  { path: 'booking', component: BookingComponent, canActivate: [AuthGuard] },
  { path: 'support', component: SupportComponent },
  { path: 'login', component: LoginComponent },
  { path: 'manage-trips', component: ManageTripsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
