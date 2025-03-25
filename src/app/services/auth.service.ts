import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;

  login(email: string, password: string): boolean {
    if (email === 'admin@example.com' && password === 'password') {
      // Update the username and password here
      this.loggedIn = true;
      localStorage.setItem('isLoggedIn', 'true'); // Store as 'isLoggedIn'
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('isLoggedIn'); // Remove 'isLoggedIn'
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true'; // Check with 'isLoggedIn'
  }
}
