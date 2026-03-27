import { Component, inject, signal } from '@angular/core';
import { Memes } from '../../services/memes';
import { Meme } from "../../components/meme/meme";

@Component({
  selector: 'app-meme-list',
  imports: [Meme],
  templateUrl: './meme-list.html',
  styleUrl: './meme-list.css',
})
export class MemeList {
  memesService = inject(Memes)

  memeList = signal<any>([])

  ngOnInit() {
    this.memesService.getMemes()
      .subscribe((data: any) => {
        console.log(data)
        this.memeList.set(data)
      })
  }

}
