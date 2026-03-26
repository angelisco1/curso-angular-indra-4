import { Component, signal } from '@angular/core';
import { ProductosTienda, Usuario, Usuarios } from './types/index.type';
import { FormsModule } from '@angular/forms';
import { ToAlertPipe } from './pipes/to-alert-pipe';

@Component({
  selector: 'app-tema05-sintaxis-control-de-flujo',
  imports: [
    FormsModule,
    ToAlertPipe,
  ],
  templateUrl: './tema05-sintaxis-control-de-flujo.html',
  styleUrl: './tema05-sintaxis-control-de-flujo.css',
})
export class Tema05SintaxisControlDeFlujo {

  email = signal<string>('')
  password = signal<string>('')

  usuariosRegistrados = signal<Usuarios>([
    {
      nombre: 'Charly Falco',
      email: 'cfalco@gmail.com',
      rol: 'admin'
    },
    {
      nombre: 'Mike Kozinski',
      email: 'kozinski@gmail.com',
      rol: 'base'
    },
    {
      nombre: 'Sarah Connor',
      email: 'connor@gmail.com',
      rol: 'manager'
    },
  ])

  usuario = signal<Usuario | null>(null)
  error = signal<string>('')

  productos = signal<ProductosTienda>([
    { id: 9, nombre: 'Zapatillas de andar por casa', precio: 15.95, stock: 20 },
    { id: 18, nombre: 'Taza de star wars', precio: 12.95, stock: 100 },
    { id: 53, nombre: 'Paquete de folios blancos', precio: 4.50, stock: 216 },
    { id: 1033, nombre: 'Tijeras', precio: 4.95, stock: 10 },
    { id: 5182, nombre: 'Calendario grande', precio: 3.95, stock: 2000 },
  ])


  login() {
    const usuarioBuscado = this.usuariosRegistrados().find((usuario: Usuario) => {
      return usuario.email === this.email() // && passwords iguales
    })

    if (usuarioBuscado) {
      this.usuario.set(usuarioBuscado)
      this.error.set('')
    } else {
      this.error.set('Credenciales inválidas')
    }
  }

  logout() {
    this.usuario.set(null)
    this.error.set('')
  }

}
