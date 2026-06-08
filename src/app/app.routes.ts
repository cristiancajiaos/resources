import { Routes } from '@angular/router';
import { Home } from './modules/home/home';
import { Posts } from './modules/posts/posts';
import { Comments } from './modules/comments/comments';
import { Albums } from './modules/albums/albums';
import { Photos } from './modules/photos/photos';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'posts', component: Posts},
  { path: 'comments', component: Comments },
  { path: 'albums', component: Albums},
  { path: 'photos', component: Photos},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
