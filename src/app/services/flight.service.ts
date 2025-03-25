import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Flight } from '../models/flight.model';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  private apiUrl =
    'https://gist.githubusercontent.com/Prawin-r/a80c7a98e2d53ceed3e3ed1144e119f0/raw/bd0e76d9fdcca5a0ca0ddb4b76a1b63fc6534929/api.json'; // ✅ Corrected path

  constructor(private http: HttpClient) {}

  getFlights(): Observable<Flight[]> {
    return this.http.get<{ flights: Flight[] }>(this.apiUrl).pipe(
      tap((data) => {
        console.log('Fetched flights:', data);
      }),
      map((data) => (Array.isArray(data) ? data : data.flights || [])), // ✅ Ensure it's always an array
      catchError((error) => {
        console.error('Error fetching flights:', error);
        return of([]); // Return an empty array if there's an error
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
