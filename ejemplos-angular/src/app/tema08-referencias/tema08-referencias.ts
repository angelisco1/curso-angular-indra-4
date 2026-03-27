import { Component } from '@angular/core';

@Component({
  selector: 'app-tema08-referencias',
  imports: [],
  templateUrl: './tema08-referencias.html',
  styleUrl: './tema08-referencias.css',
})
export class Tema08Referencias {


  play(media: HTMLMediaElement) {
    console.log(media)
    console.dir(media)
    // document.querySelector('video')?.play()
    media.play()
  }
  
  pause(media: HTMLMediaElement) {
    // document.querySelector('video')?.pause()
    media.pause()
  }

}
