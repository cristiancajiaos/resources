import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../interfaces/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {

  private http = inject(HttpClient);

  public getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`/comments`);
  }


}
