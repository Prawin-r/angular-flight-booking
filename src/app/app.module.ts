import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { AppRoutingModule } from './app-routing.module';

// ✅ Import standalone components
import { HomeComponent } from './components/home/home.component';
import { FlightsComponent } from './components/flights/flights.component';
import { BookingComponent } from './components/booking/booking.component';
import { SupportComponent } from './components/support/support.component';
import { LoginComponent } from './components/login/login.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ManageTripsComponent } from './components/manage-trips/manage-trips.component';

// ✅ Import standalone pipes
import { FlightFilterPipe } from './pipes/flight-filter.pipe';
import { FlightTimePipe } from './pipes/flight-time.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'flights', component: FlightsComponent },
  { path: 'booking', component: BookingComponent, canActivate: [AuthGuard] },
  { path: 'support', component: SupportComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent, // Only the main AppComponent should be declared
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,

    // ✅ Import standalone components and pipes correctly
    HomeComponent,
    FlightsComponent,
    BookingComponent,
    SupportComponent,
    LoginComponent,
    MenuBarComponent,
    ManageTripsComponent,
    FlightFilterPipe,
    FlightTimePipe,
    CapitalizePipe,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
