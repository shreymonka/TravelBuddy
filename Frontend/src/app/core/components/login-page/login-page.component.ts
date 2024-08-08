import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LoginServiceService } from '../../services/login-service/login-service.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent{
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private loginService: LoginServiceService
  ) {}

  SignUpRedirect() {
    this.router.navigate(['/signup']);
  }

  onSubmit(loginForm: NgForm) {
    if (!loginForm.valid) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Input',
        text: 'Please correct the errors in the form.',
        confirmButtonText: 'OK'
      });
      return;
    }

    const user = {
      email: this.email,
      password: this.password
    };

    this.loginService.loginUser(user).subscribe({
      next: (response) => {
        console.log("Login response:", response);
        Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          text: response.message,
          confirmButtonText: 'OK'
        }).then(() => {
          if (response.message === "Login successful") {
            this.router.navigate(['/postLogin']);
          }
        });
      },
      error: (err) => {
        console.error("Login error:", err);
        const errorMessage = err.error ? (err.error.message || err.error) : "Unknown error";
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: errorMessage,
          confirmButtonText: 'OK'
        });
      }
    });
  }
}
