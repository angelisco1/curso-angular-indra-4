import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-meme',
  imports: [],
  templateUrl: './meme.html',
  styleUrl: './meme.css',
})
export class Meme {
  meme = input<any>(null)
  onVotar = output<any>()

  votar() {
    this.onVotar.emit(this.meme)
  }

}
