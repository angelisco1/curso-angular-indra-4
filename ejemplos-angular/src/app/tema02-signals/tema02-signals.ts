import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tema02-signals',
  imports: [FormsModule],
  templateUrl: './tema02-signals.html',
  styleUrl: './tema02-signals.css',
})
export class Tema02Signals {
  precio = signal<number>(10)

  duplicarPrecio() {
    // const nuevoPrecio = this.precio() * 2
    // this.precio.set(nuevoPrecio)

    this.precio.update((valorPrecio: number) => {
      return valorPrecio * 2
    })
  }

  ponerGratis() {
    this.precio.set(0)
  }
}
