import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo-service';
import { Photo } from '../../interfaces/photo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-photos',
  imports: [],
  templateUrl: './photos.html',
  styleUrl: './photos.scss',
})
export class Photos implements OnInit, OnDestroy {

  private photoService = inject(PhotoService);

  public photos: Photo[] = [];

  private getPhotosSubscription: Subscription;

  ngOnInit(): void {
    this.getPhotos();
  }

  private getPhotos(): void {
    this.getPhotosSubscription = this.photoService.getPhotos().subscribe({
      next: (photos) => {
        this.photos = photos;
      },
      error: (error) => {

      },
      complete: () => {}
    });
  }

  ngOnDestroy(): void {
    if (this.getPhotosSubscription) {
      this.getPhotosSubscription.unsubscribe();
    }
  }
}
