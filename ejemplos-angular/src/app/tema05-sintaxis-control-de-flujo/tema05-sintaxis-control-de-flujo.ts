import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-tema05-sintaxis-control-de-flujo',
  imports: [],
  templateUrl: './tema05-sintaxis-control-de-flujo.html',
  styleUrl: './tema05-sintaxis-control-de-flujo.css',
})
export class Tema05SintaxisControlDeFlujo {
  usuariosRegistrados = signal<Array<any>>([
    {
      nombre: 'Charly Falco',
      email: 'cfalco@gmail.com',
      rol: 'admin'
    },
    {
      nombre: 'Mike Kozinski',
      email: 'kozinski@gmail.com',
      rol: 'junior'
    },
    {
      nombre: 'Sarah Connor',
      email: 'connor@gmail.com',
      rol: 'manager'
    },
  ])


  usuario = signal<any>({
    nombre: 'Charly Falco',
    email: 'cfalco@gmail.com',
    rol: 'admin'
  })

  productos = signal<Array<any>>([
    { id: 1, nombre: 'Zapatillas de andar por casa', precio: 15.95, stock: 20 },
    { id: 2, nombre: 'Taza de star wars', precio: 12.95, stock: 100 },
    { id: 3, nombre: 'Paquete de folios blancos', precio: 4.50, stock: 216 },
    { id: 4, nombre: 'Tijeras', precio: 4.95, stock: 10 },
    { id: 5, nombre: 'Calendario grande', precio: 3.95, stock: 2000 },
  ])

}
