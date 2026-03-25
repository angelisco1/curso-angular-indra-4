import { Component, signal } from '@angular/core';
import { Sugus } from "./sugus/sugus";
import { Producto } from "./producto/producto";


interface Cesta {
  [key: string]: number
}

export interface IProducto {
  sabor: string
  cantidad: number
}

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

  cesta = signal<Cesta>({})

  agregarProducto(producto: IProducto): void {
    this.cesta.update((cestaActual: Cesta) => {

      const productosEnCesta = Object.keys(cestaActual)
      if (productosEnCesta.includes(producto.sabor)) {
        cestaActual[producto.sabor] += producto.cantidad
      } else {
        cestaActual[producto.sabor] = producto.cantidad
      }

      console.log(cestaActual)
      
      return cestaActual
    })
  }

}
