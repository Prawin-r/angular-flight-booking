import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../services/flight.service';
import { Flight } from '../../models/flight.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import this
import { FormsModule } from '@angular/forms';
import { CapitalizePipe } from '/angular_project/flight-booking-angular-app/src/app/pipes/capitalize.pipe';
import { FlightFilterPipe } from '../../pipes/flight-filter.pipe';
import { FlightTimePipe } from '../../pipes/flight-time.pipe';

@Component({
  selector: 'app-flights',
  standalone: true,
  imports: [CommonModule, FlightFilterPipe, FlightTimePipe, CapitalizePipe,FormsModule], // Add this
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
})
export class FlightsComponent implements OnInit {
  flights: Flight[] = [];
  originFilter: string = '';
  destinationFilter: string = '';
  selectedTime: string = '';
  maxPrice: number = 10000;

  constructor(private flightService: FlightService, private router: Router) {}

  ngOnInit(): void {
    this.flightService.getFlights().subscribe((data) => {
      this.flights = data;
    });
  }

  bookFlight(flight: any) {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      localStorage.setItem('selectedFlight', JSON.stringify(flight));
      this.router.navigate(['/booking']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  swapLocations(): void {
    const temp = this.originFilter;
    this.originFilter = this.destinationFilter;
    this.destinationFilter = temp;
  }
}
