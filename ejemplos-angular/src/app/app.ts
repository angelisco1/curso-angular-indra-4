import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tema01DataBinding } from "./tema01-data-binding/tema01-data-binding";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tema01DataBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ejemplos-angular');
}
