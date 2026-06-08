import { Component, OnDestroy, inject, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment-service';
import { Subscription } from 'rxjs';
import { LoadingService } from '../../services/loading-service';
import { Comment } from '../../interfaces/comment';

@Component({
  selector: 'app-comments',
  imports: [],
  templateUrl: './comments.html',
  styleUrl: './comments.scss',
})
export class Comments implements OnInit, OnDestroy {


  public commentService = inject(CommentService);
  public loadingService = inject(LoadingService);

  public comments: Comment[] = [];

  private getCommentsSubscription: Subscription;

  ngOnInit(): void {
    this.getComments();
  }

  public getComments(): void {
    this.commentService.getComments().subscribe({
      next: (comments) => {
        this.comments = comments;
      },
      error: (error) => {

      },
      complete: () => {
      }
    });
  }

  ngOnDestroy(): void {
    if (this.getCommentsSubscription) {
      this.getCommentsSubscription.unsubscribe();
    }
  }
}
