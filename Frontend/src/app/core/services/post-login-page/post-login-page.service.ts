import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostLoginPageService {
  private apiUrl = 'http://ec2-18-204-196-123.compute-1.amazonaws.com:80/api/posts/getPost';
  private itineraryUrl = 'http://ec2-18-204-196-123.compute-1.amazonaws.com:80/api/itinerary';

  // private apiUrl = 'http://localhost:8080/api/posts/getPost';
  // private itineraryUrl = 'http://localhost:8080/api/itinerary';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getItineraries(): Observable<any[]> {
    return this.http.get<any[]>(`${this.itineraryUrl}/all`);
  }

  addItinerary(itinerary: any): Observable<any> {
    return this.http.post<any>(`${this.itineraryUrl}/add`, itinerary);
  }

  deleteItinerary(id: number): Observable<void> {
    return this.http.delete<void>(`${this.itineraryUrl}/delete/${id}`);
  }
}
