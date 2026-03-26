import { Component, inject } from '@angular/core';
import { Logger } from './services/logger';

@Component({
  selector: 'app-tema07-servicios',
  imports: [],
  templateUrl: './tema07-servicios.html',
  styleUrl: './tema07-servicios.css',
})
export class Tema07Servicios {

  private logger = inject(Logger)
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
}
