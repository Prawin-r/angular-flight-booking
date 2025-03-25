import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
})
export class MenuBarComponent implements OnInit {
  searchQuery: string = '';
  loginMenu: string = 'Login';
  isLoggedIn: boolean = false;
  static loginStatusChanged: Subject<boolean> = new Subject<boolean>();

  constructor(private router: Router) {
    // Subscribe to the login status change event
    MenuBarComponent.loginStatusChanged.subscribe((status: boolean) => {
      this.isLoggedIn = status;
      this.updateLoginMenu();
    });
  }
  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  ngOnInit(): void {
    // Check login status on initialization
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    this.updateLoginMenu();
  }

  updateLoginMenu() {
    this.loginMenu = this.isLoggedIn ? 'Logout' : 'Login';
  }

  loginHandler() {
    if (this.isLoggedIn) {
      this.logout();
    } else {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
    this.updateLoginMenu();
    this.router.navigate(['/']); // Redirect to homepage after logout
  }

  searchFlights() {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/flights'], {
        queryParams: { query: this.searchQuery },
      });
    }
  }

  goToManageTrips() {
    this.router.navigate(['/manage-trips']);
  }
}
