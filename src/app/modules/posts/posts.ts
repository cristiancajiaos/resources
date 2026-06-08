import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { LoadingIndicator } from '../../components/loading-indicator/loading-indicator';
import { PostService } from '../../services/post-service';
import { Subscription } from 'rxjs';
import { Post } from '../../interfaces/post';
import { LoadingService } from '../../services/loading-service';

@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.html',
  styleUrl: './posts.scss',
})
export class Posts implements OnInit, OnDestroy {

  private loadingService = inject(LoadingService);
  private postService = inject(PostService);

  public posts: Post[] = [];

  private getPostsSubscription: Subscription;

  ngOnInit(): void {

  }

  public getPosts(): void {
    this.getPostsSubscription = this.postService.getPosts().subscribe({
      next: (posts) => {
        this.posts = posts;
      },
      error: (error) => {

      },
      complete: () => {
      }
    });
  }

  ngOnDestroy(): void {
    if (this.getPostsSubscription) {
      this.getPostsSubscription.unsubscribe();
    }
  }
}
