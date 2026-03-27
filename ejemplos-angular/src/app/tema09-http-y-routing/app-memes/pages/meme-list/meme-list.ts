import { Component, inject, signal } from '@angular/core';
import { Memes } from '../../services/memes';
import { Meme } from "../../components/meme/meme";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-meme-list',
  imports: [Meme, RouterLink],
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

  votarMeme(meme: any): void {
    this.memesService.voteMeme(meme())
      .subscribe((memeActualizado: any) => {

        this.memeList.update((currentMemeList: any) => {

          const listaActualizada = currentMemeList.map((m: any) => {
            if (m.id === meme().id) {
              return memeActualizado
            }
            return m
          })

          return listaActualizada
        })

      })
  }

}
