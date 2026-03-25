import { CommonModule, CurrencyPipe, DatePipe, JsonPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CambiarSimboloPipe } from './pipes/cambiar-simbolo-pipe';

@Component({
  selector: 'app-tema04-pipes',
  imports: [
    TitleCasePipe,
    CurrencyPipe,
    DatePipe,
    SlicePipe,
    JsonPipe,
    // CommonModule,
    CambiarSimboloPipe,
  ],
  templateUrl: './tema04-pipes.html',
  styleUrl: './tema04-pipes.css',
})
export class Tema04Pipes {

  producto = {
    nombre: 'nothing phone 3',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus exercitationem a, aliquam atque accusantium animi vero quas minima quidem. Minima doloribus rerum reprehenderit unde molestiae quisquam, quis omnis aut eum?',
    precio: 689.9,
    fechaLanzamiento: new Date(2025, 9, 15)
  }

  constructor() {
    const holaTitle = new TitleCasePipe().transform('hola')
    console.log(holaTitle)
  }

}
