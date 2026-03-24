import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-tema01-data-binding',
  imports: [FormsModule],
  templateUrl: './tema01-data-binding.html',
  styleUrl: './tema01-data-binding.css',
})
export class Tema01DataBinding {

  // string, number, boolean, null, undefined
  // Array<string>, string[]
  // any <- Mala práctica, evitar usarlo

  // nombre: string | null = null
  // constructor() {
  //   this.nombre = 'Charly'
  // }

  // Propiedades del componente
  nombre: string = 'Charly'
  apellido: string = 'Falco'

  urlImagen: string = 'https://wata.es/wp-content/uploads/2026/07/Angular-logo-ES.webp'
  logo: string = 'Angular'

  getNombreCompleto(): string {
    return `${this.nombre} ${this.apellido}`
  }

  get nombreCompleto(): string {
    return `${this.nombre} ${this.apellido}`
  }

  // void -> tipo de dato para indicar que la fn no devuelve nada
  saludar(): void {
    alert(`Hola, ${this.nombreCompleto}`)
  }

  vaciarNombre(): void {
    this.nombre = ''
  }

  cambiarNombre(event: Event): void {
    // console.log(event)
    this.nombre = (event.target as HTMLInputElement).value
  }

}
