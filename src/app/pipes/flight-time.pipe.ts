import { Pipe, PipeTransform } from '@angular/core';
import { Flight } from '../models/flight.model';

@Pipe({
  name: 'flightTime',
})
export class FlightTimePipe implements PipeTransform {
  transform(flights: Flight[], selectedTime: string): Flight[] {
    if (!flights || !selectedTime) return flights;

    return flights.filter((flight) => {
      const [time, period] = flight.time.split(' ');
      const [hours, minutes] = time.split(':').map(Number);
      const militaryHour = period === 'PM' && hours !== 12 ? hours + 12 : hours;

      if (selectedTime === 'morning')
        return militaryHour >= 6 && militaryHour < 12;
      if (selectedTime === 'afternoon')
        return militaryHour >= 12 && militaryHour < 18;
      if (selectedTime === 'evening')
        return militaryHour >= 18 && militaryHour < 24;
      if (selectedTime === 'night')
        return militaryHour >= 0 && militaryHour < 6;

      return true;
    });
  }
}
