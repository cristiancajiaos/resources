import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../interfaces/photo';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {

  private http = inject(HttpClient);

  public getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(`/photos`);
  }
}
