import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tema02-signals',
  imports: [FormsModule],
  templateUrl: './tema02-signals.html',
  styleUrl: './tema02-signals.css',
})
export class Tema02Signals {
  precio = signal<number>(10)
  cantidad = signal<number>(1)

  descuento = signal<number>(50)

  total = computed(() => {
    console.log('Cambiando el total')
    return this.precio() * this.cantidad()
  })

  totalConDescuentos = computed(() => {
    return this.total() - (this.total() * this.descuento()/100)
  })

  duplicarPrecio() {
    // const nuevoPrecio = this.precio() * 2
    // this.precio.set(nuevoPrecio)
    console.log(this.precio())

    this.precio.update((valorPrecio: number) => {
      return valorPrecio * 2
    })
  }

  ponerGratis() {
    this.precio.set(0)
  }

  decrementar() {
    this.cantidad.update((cantidadActual: number) => {
      if (cantidadActual === 0) {
        return cantidadActual
      }
      return cantidadActual - 1
    })
  }

  incrementar() {
    this.cantidad.update((cantidadActual: number) => {
      return cantidadActual + 1
    })
  }
}
