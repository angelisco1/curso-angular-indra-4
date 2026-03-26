import { Component } from '@angular/core';
import { Plantilla } from "./plantilla/plantilla";
import { Reactivo } from "./reactivo/reactivo";

@Component({
  selector: 'app-tema06-formularios',
  imports: [
    Plantilla,
    Reactivo
  ],
  templateUrl: './tema06-formularios.html',
  styleUrl: './tema06-formularios.css',
})
export class Tema06Formularios {

}
