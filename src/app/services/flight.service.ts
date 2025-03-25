import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';
import { Flight } from '../models/flight.model';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  private apiUrl = 'http://localhost:4500/flights'; // ✅ Corrected path

  constructor(private http: HttpClient) {}

  getFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.apiUrl).pipe(
      tap((data) => console.log('Fetched flights:', data)),
      catchError((error) => {
        console.error('Error fetching flights:', error);
        throw error; // rethrow error for handling in the component
      })
    );
  }

  saveBooking(booking: any): void {
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    console.log('Booking saved successfully:', booking);
  }

  getBookings(): any[] {
    return JSON.parse(localStorage.getItem('bookings') || '[]');
  }

  clearBooking(index: number): void {
    const bookings = this.getBookings();
    bookings.splice(index, 1);
    localStorage.setItem('bookings', JSON.stringify(bookings));
  }
}
