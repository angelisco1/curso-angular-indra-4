import { Routes } from '@angular/router';
import { Home } from './tema09-http-y-routing/app-memes/pages/home/home';
import { MemeList } from './tema09-http-y-routing/app-memes/pages/meme-list/meme-list';
import { NewMeme } from './tema09-http-y-routing/app-memes/pages/new-meme/new-meme';
import { Error } from './tema09-http-y-routing/app-memes/pages/error/error';
import { MemeDetail } from './tema09-http-y-routing/app-memes/pages/meme-detail/meme-detail';

export const routes: Routes = [
  { 
    path: 'home',
    component: Home,
  },
  { 
    path: 'meme-list',
    component: MemeList,
  },
  { 
    path: 'memes/:memeId',
    component: MemeDetail,
  },
  { 
    path: 'new-meme',
    component: NewMeme,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: Error
  }
];
