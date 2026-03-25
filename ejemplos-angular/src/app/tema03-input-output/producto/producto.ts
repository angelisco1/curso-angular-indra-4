import { Component, Input, input, output, signal } from '@angular/core';
import { Sugus } from "../sugus/sugus";
import { IProducto } from '../tema03-input-output';

interface ISugus {
  color: string
  sabor: string
}


@Component({
  selector: 'app-producto',
  imports: [Sugus],
  templateUrl: './producto.html',
  styleUrl: './producto.css',
})
export class Producto {
  cantidad = signal<number>(0)

  // sugus = input<{color: string, sabor: string}>()
  sugus = input.required<ISugus>()
  onAgregarProducto = output<IProducto>()

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

  agregar() {
    if (this.cantidad() !== 0) {
      this.onAgregarProducto.emit({
        sabor: this.sugus().sabor,
        cantidad: this.cantidad()
      })

      this.cantidad.set(0)
    }
  }

}
