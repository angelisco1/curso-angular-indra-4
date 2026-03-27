import { Component, signal } from '@angular/core';
import { Observables } from "./observables/observables";
import { AppMemes } from "./app-memes/app-memes";

@Component({
  selector: 'app-tema09-http-y-routing',
  imports: [Observables, AppMemes],
  templateUrl: './tema09-http-y-routing.html',
  styleUrl: './tema09-http-y-routing.css',
})
export class Tema09HttpYRouting {

  mostrarObservables = signal<boolean>(false)

  toggleObservables(): void {
    this.mostrarObservables.update(mostrar => !mostrar)
  }

}
