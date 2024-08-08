import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListPostService {
  private apiUrl = 'http://ec2-18-204-196-123.compute-1.amazonaws.com:80/api/posts/createPost';

  // private apiUrl = 'http://localhost:8080/api/posts/createPost';

  constructor(private http: HttpClient) { }

  createPost(postData: { title: string; description: string; rating: number }): Observable<any> {
    return this.http.post<any>(this.apiUrl, postData);
  }
}