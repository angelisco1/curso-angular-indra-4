import { JsonPipe, KeyValuePipe } from '@angular/common';
import { Component, computed } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidators } from '../validations/index.validators';

@Component({
  selector: 'app-reactivo',
  imports: [
    ReactiveFormsModule,
    KeyValuePipe,
  ],
  templateUrl: './reactivo.html',
  styleUrl: './reactivo.css',
})
export class Reactivo {

  formulario = new FormGroup({
    nombre: new FormControl('Ángel', Validators.required),
    email: new FormControl('', Validators.pattern('\\w+@\\w+\\.\\w{2,3}')),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      // CustomValidators.passwordSegura
      CustomValidators.passwordSegura2('-_!$', true)
    ]),
  })

  get erroresPassword() {
    return this.formulario.get('password')!.errors
  }
  
  get passwordTouched() {
    return this.formulario.get('password')!.touched
  }

  registrarUsuario() {
    // console.log(this.formulario)
    console.log(this.formulario.value)
  }

}
