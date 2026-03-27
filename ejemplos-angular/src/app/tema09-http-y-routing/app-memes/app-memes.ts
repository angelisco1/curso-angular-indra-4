import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-app-memes',
  imports: [
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './app-memes.html',
  styleUrl: './app-memes.css',
})
export class AppMemes {

}
