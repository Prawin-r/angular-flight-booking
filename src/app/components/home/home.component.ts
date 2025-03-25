import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  popularDestinations = [
    {
      name: 'Paris',
      description: 'The city of lights.',
      image: '/assets/paris.jpeg',
    },
    {
      name: 'New York',
      description: 'The city that never sleeps.',
      image: '/assets/newyork.jpeg',
    },
    {
      name: 'Tokyo',
      description: 'Experience the blend of tradition and technology.',
      image: '/assets/tokyo.jpeg',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}
  goToFlights() {
    this.router.navigate(['/flights']);
  }
  browseFlights(event: Event) {
    event.stopPropagation(); // Prevents triggering the whole hero banner click
    this.router.navigate(['/flights']);
  }
}
