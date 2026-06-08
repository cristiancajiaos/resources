import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../interfaces/album';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {

  private http = inject(HttpClient);

  public getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>('/albums');
  }
}
