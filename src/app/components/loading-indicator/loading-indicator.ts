import { Component, ContentChild, Input, OnInit, TemplateRef, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoadingService } from '../../services/loading-service';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AsyncPipe, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-loading-indicator',
  imports: [MatProgressSpinnerModule, AsyncPipe, NgTemplateOutlet],
  templateUrl: './loading-indicator.html',
  styleUrl: './loading-indicator.scss',
})
export class LoadingIndicator implements OnInit {

  public loading$: Observable<boolean>;

  private loadingService = inject(LoadingService);
  private router = inject(Router);

  @Input() detectRouteTransitions: boolean = false;

  @ContentChild("loading") customLoadingIndicator: TemplateRef<any> | null = null;

  constructor() {
    this.loading$ = this.loadingService.loading$;
  }

  ngOnInit(): void {
    if (this.detectRouteTransitions) {
      this.router.events.pipe(
        tap((event) => {
          if (event instanceof RouteConfigLoadStart) {
            this.loadingService.loadingOn();
          } else if (event instanceof RouteConfigLoadEnd) {
            this.loadingService.loadingOff();
          }
        })
      )
    }

  }
}
