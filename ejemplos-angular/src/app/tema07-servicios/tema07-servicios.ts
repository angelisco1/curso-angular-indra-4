import { Component, inject, computed } from '@angular/core';
import { Logger } from './services/logger';
import { Lang, Traductor } from './services/traductor';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-tema07-servicios',
  imports: [
    FormsModule,
    JsonPipe,
  ],
  templateUrl: './tema07-servicios.html',
  styleUrl: './tema07-servicios.css',
})
export class Tema07Servicios {
  private logger = inject(Logger)
  private traductor = inject(Traductor)
  lenguajes = this.traductor.lenguajes
  lenguajeSeleccionado = this.traductor.lang

  mostrarMensajeTexto = computed(() => {
    const lang = this.lenguajeSeleccionado()
    return this.traductor.traducir(lang, 'mostrar_mensaje')
  })

  // constructor(
  //   private logger: Logger
  // ) { }

  mostrarMensaje(msg: string): void {
    // console.log(`[${new Date().toLocaleString()}] ${msg}`)
    this.logger.info(msg)
  }
  
  mostrarError(err: string): void {
    // console.error(`[${new Date().toLocaleString()}] ${err}`)
    this.logger.error(err)
  }

  cambiarLang(event: Event) {
    const lenguajeSeleccionado: Lang = this.traductor.lenguajes.find(l => l.codigo === (event.target as HTMLSelectElement).value) || this.lenguajes[0]
    this.traductor.lang.set(lenguajeSeleccionado)
  }
}
