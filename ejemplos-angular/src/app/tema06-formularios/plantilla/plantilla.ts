import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

type DatosRegistro = {
  nombre: string,
  email: string,
  password: string
}


@Component({
  selector: 'app-plantilla',
  imports: [
    FormsModule,
  ],
  templateUrl: './plantilla.html',
  styleUrl: './plantilla.css',
})
export class Plantilla {

  datosRegistro = signal<DatosRegistro>({
    nombre: 'Ángel',
    email: '',
    password: ''
  })

  registrarUsuario(form: any) {
    // console.log(this.datosRegistro())

    console.log(form)

    console.log('Enviando los datos al backend: ', form.value)
  }

}
