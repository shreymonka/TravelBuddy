import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface LoginResponse {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private apiUrl = 'http://ec2-18-204-196-123.compute-1.amazonaws.com:80/api/auth/login';
  // private apiUrl = 'http://localhost:8080/api/auth/login';

  constructor(private http: HttpClient) {}

  loginUser(user: { email: string; password: string }): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl, user);
  }
}
