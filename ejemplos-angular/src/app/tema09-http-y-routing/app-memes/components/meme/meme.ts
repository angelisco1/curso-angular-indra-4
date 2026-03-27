import { Component, input } from '@angular/core';

@Component({
  selector: 'app-meme',
  imports: [],
  templateUrl: './meme.html',
  styleUrl: './meme.css',
})
export class Meme {
  meme = input<any>(null)

}
