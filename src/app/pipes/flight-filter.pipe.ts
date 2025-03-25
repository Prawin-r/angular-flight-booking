import { Pipe, PipeTransform } from '@angular/core';
import { Flight } from '../models/flight.model';

@Pipe({
  name: 'flightFilter',
})
export class FlightFilterPipe implements PipeTransform {
  transform(
    flights: Flight[],
    originFilter: string = '',
    destinationFilter: string = '',
    maxPrice: number = Infinity
  ): Flight[] {
    if (!flights || flights.length === 0) return [];

    return flights.filter((flight) => {
      const origin = flight.origin?.toLowerCase() || '';
      const destination = flight.destination?.toLowerCase() || '';

      const matchesOrigin = origin.includes(originFilter.toLowerCase());
      const matchesDestination = destination.includes(
        destinationFilter.toLowerCase()
      );
      const matchesPrice = maxPrice ? flight.price <= maxPrice : true;

      return matchesOrigin && matchesDestination && matchesPrice;
    });
  }
}
