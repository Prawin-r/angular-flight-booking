import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from '../../services/flight.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add FormsModule
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})

export class BookingComponent {
  name: string = '';
  email: string = '';
  selectedFlight: any = null;

  constructor(private router: Router, private flightService: FlightService) {
    const flightData = localStorage.getItem('selectedFlight');
    if (flightData) {
      this.selectedFlight = JSON.parse(flightData);
    }
  }

  onSubmit(): void {
    if (this.name && this.email && this.selectedFlight) {
      const booking = {
        name: this.name,
        email: this.email,
        flight: this.selectedFlight,
      };

      this.flightService.saveBooking(booking);

      alert('Booking Successful!');
      this.router.navigate(['/manage-trips']);
    } else {
      alert('Please fill in all details.');
    }
  }
}
