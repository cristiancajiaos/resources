import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../interfaces/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {

  private http = inject(HttpClient);

  private baseUrl: string = 'https://jsonplaceholder.typicode.com';

  public getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.baseUrl}/comments`);
  }


}
