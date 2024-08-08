import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// export class SignupServiceService {

//   private apiUrl = 'http://localhost:8080/api/auth/signup';
//   // private apiUrl = 'http://ec2-54-145-129-244.compute-1.amazonaws.com:80/api/auth/signup'

//   constructor(private http: HttpClient) { }

//   registerUser(user: { email: string; password: string }): Observable<any> {
//     return this.http.post<any>(this.apiUrl, user);
//   }
// }

export class SignupServiceService {
  // URL for user registration (backend)
  private apiUrl = 'http://ec2-18-204-196-123.compute-1.amazonaws.com:80/api/auth/signup';
  // private apiUrl = 'http://localhost:8080/api/auth/signup';


  // URL for Lambda function (API Gateway)
  private lambdaApiUrl = 'https://12tke8zjjl.execute-api.us-east-1.amazonaws.com/testAuth/api/auth/sendmail';

  constructor(private http: HttpClient) {}

  registerUser(user: { email: string; password: string; username: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }

  sendWelcomeEmail(user: { email: string; password: string; username: string }): Observable<any> {
    return this.http.post<any>(this.lambdaApiUrl, user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // A method to handle both user registration and sending the welcome email
  registerAndSendEmail(user: { email: string; password: string; username: string }): Observable<any> {
    return forkJoin([
      this.registerUser(user),
      this.sendWelcomeEmail(user)
    ]);
  }
}
