import { Component, signal } from '@angular/core';
import { Tema01DataBinding } from "./tema01-data-binding/tema01-data-binding";
import { Tema02Signals } from "./tema02-signals/tema02-signals";


@Component({
  selector: 'app-root',
  imports: [Tema01DataBinding, Tema02Signals],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
