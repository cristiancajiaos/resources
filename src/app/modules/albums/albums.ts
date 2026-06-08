import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album-service';
import { Subscription } from 'rxjs';
import { Album } from '../../interfaces/album';

@Component({
  selector: 'app-albums',
  imports: [],
  templateUrl: './albums.html',
  styleUrl: './albums.scss',
})
export class Albums implements OnInit, OnDestroy {

  private albumService = inject(AlbumService);

  public albums: Album[] = [];

  private getAlbumsSuscription: Subscription;

  ngOnInit(): void {
    this.getAlbums();
  }

  private getAlbums(): void {
    this.getAlbumsSuscription = this.albumService.getAlbums().subscribe({
      next: (albums) => {
        this.albums = albums;
      },
      error: (error) => {

      },
      complete: () => {

      }
    });
  }

  ngOnDestroy(): void {
    if (this.getAlbumsSuscription) {
      this.getAlbumsSuscription.unsubscribe();
    }
  }
}
