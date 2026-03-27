import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Memes } from '../../services/memes';
import { Router } from '@angular/router';
import { Meme } from "../../components/meme/meme";

@Component({
  selector: 'app-new-meme',
  imports: [ReactiveFormsModule, Meme],
  templateUrl: './new-meme.html',
  styleUrl: './new-meme.css',
})
export class NewMeme {
  memesService = inject(Memes)
  router = inject(Router)

  formMeme = new FormGroup({
    texto1: new FormControl(''),
    texto2: new FormControl(''),
    url: new FormControl('', Validators.required),
    color: new FormControl('#ffffff', Validators.required),
    votos: new FormControl(0)
  })


  guardarMeme() {
    console.log(this.formMeme.value)
    this.memesService.createMeme(this.formMeme.value)
      .subscribe((memeCreado: any) => {
        console.log(memeCreado)
        alert('Se ha creado el meme')
        this.router.navigateByUrl('/meme-list')
        // this.router.navigate(['/meme-list'])
      })
  }

}
