import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {} // Inject Router

  login() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter both email and password.';
    } else if (
      this.email === 'admin@example.com' &&
      this.password === 'password'
    ) {
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      this.errorMessage = '';

      // Save login status to localStorage
      localStorage.setItem('isLoggedIn', 'true');

      // Redirect to Flights page
      this.router.navigate(['/flights']);
    } else {
      this.errorMessage = 'Invalid email or password!';
    }
  }
}
