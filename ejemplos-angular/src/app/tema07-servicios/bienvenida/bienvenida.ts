import { Component, computed, inject } from '@angular/core';
import { Traductor } from '../services/traductor';
import { Storage } from '../services/storage';
import { Usuario } from '../../tema05-sintaxis-control-de-flujo/types/index.type';

@Component({
  selector: 'app-bienvenida',
  imports: [],
  templateUrl: './bienvenida.html',
  styleUrl: './bienvenida.css',
})
export class Bienvenida {
  traductor = inject(Traductor)
  storage = inject(Storage)
  usuario: Usuario | null = null

  bienvenidoTexto = computed(() => {
    return this.traductor.traducir(this.traductor.lang(), 'bienvenido')
  })

  ngOnInit() {
    this.usuario = this.storage.getUsuario()
  }

}
