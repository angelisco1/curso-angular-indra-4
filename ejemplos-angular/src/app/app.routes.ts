import { Routes } from '@angular/router';
import { Home } from './tema09-http-y-routing/app-memes/pages/home/home';
import { MemeList } from './tema09-http-y-routing/app-memes/pages/meme-list/meme-list';

export const routes: Routes = [
  { 
    path: 'home',
    component: Home,
  },
  { 
    path: 'meme-list',
    component: MemeList,
  },
];
