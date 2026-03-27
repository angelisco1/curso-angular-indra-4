import { Component, inject, signal } from '@angular/core';
import { Memes } from '../../services/memes';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Meme } from "../../components/meme/meme";
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-meme-detail',
  imports: [Meme],
  templateUrl: './meme-detail.html',
  styleUrl: './meme-detail.css',
})
export class MemeDetail {
  memesService = inject(Memes)
  route = inject(ActivatedRoute)

  meme = signal<any>(null)

  ngOnInit() {
    console.log(this.route)
    // this.route.paramMap
    //   .subscribe((params: ParamMap) => {
    //     const memeId = params.get('memeId')
    //     if (memeId) {
    //       this.memesService.getMeme(memeId)
    //         .subscribe((meme: any) => {
    //           this.meme.set(meme)
    //         })
    //     }
    //   })

    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          const memeId = params.get('memeId')
          if (memeId) {
            return this.memesService.getMeme(memeId)
          }
          return of(null)
        })
      ).subscribe((meme: any) => {
        this.meme.set(meme)
      })
    
  }

  votarMeme(meme: any): void {
    this.memesService.voteMeme(meme())
      .subscribe((memeActualizado: any) => {
        this.meme.set(memeActualizado)
      })
  }

}
