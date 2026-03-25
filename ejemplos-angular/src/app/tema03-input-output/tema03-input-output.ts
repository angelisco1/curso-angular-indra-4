import { Component } from '@angular/core';
import { Sugus } from "./sugus/sugus";
import { Producto } from "./producto/producto";

@Component({
  selector: 'app-tema03-input-output',
  imports: [Sugus, Producto],
  templateUrl: './tema03-input-output.html',
  styleUrl: './tema03-input-output.css',
})
export class Tema03InputOutput {

  sugusFresa = {
    c: 'red',
    s: 'fresa'
  }

}
