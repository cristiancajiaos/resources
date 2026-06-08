import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { LoadingIndicator } from '../loading-indicator/loading-indicator';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink, LoadingIndicator],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {}
