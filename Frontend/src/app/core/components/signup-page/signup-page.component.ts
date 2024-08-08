import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupServiceService } from '../../services/signup-service/signup-service.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  username: string = '';

  constructor(
    private router: Router,
    private signupService: SignupServiceService
  ){}

  LoginRedirect() {
    this.router.navigate(['/loginpage']);
  }

  onSubmit(signupForm: NgForm) {
    if (!signupForm.valid || this.password !== this.confirmPassword) {
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
      password: this.password,
      username: this.username
    };

    this.signupService.registerAndSendEmail(user).subscribe({
      next: ([registerResponse, emailResponse]) => {
        Swal.fire({
          icon: 'success',
          title: 'Sign Up Successful!',
          text: registerResponse.message,
          confirmButtonText: 'OK'
        }).then(() => {
          this.router.navigate(['/loginpage']);
        });
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Sign Up Failed',
          text: err.error.message,
          confirmButtonText: 'OK'
        });
      }
    });
  }
}