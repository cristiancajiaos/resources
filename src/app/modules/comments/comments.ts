import { Component, OnDestroy, inject } from '@angular/core';
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
export class Comments implements OnDestroy {

  public commentService = inject(CommentService);
  public loadingService = inject(LoadingService);

  public comments: Comment[] = [];

  private getCommentsSubscription: Subscription;

  public getComments(): void {
    this.loadingService.loadingOn();
    this.commentService.getComments().subscribe({
      next: (comments) => {
        this.comments = comments;
      },
      error: (error) => {

      },
      complete: () => {
        this.loadingService.loadingOff();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.getCommentsSubscription) {
      this.getCommentsSubscription.unsubscribe();
    }
  }
}
