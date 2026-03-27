import { Injectable } from '@angular/core';
import { Usuario } from '../../tema05-sintaxis-control-de-flujo/types/index.type';

@Injectable({
  providedIn: 'root',
})
export class Storage {
  /**
   * ⚠️
   * ESTE SERVICIO SE ESTÁ USANDO EN EL TEMA05
   * DONDE TENEMOS EL FORM DE LOGIN
   */
  private KEY: string = 'usuario'

  getUsuario(): Usuario | null {
    const usuario = localStorage.getItem(this.KEY)
    if (usuario) {
      return JSON.parse(usuario)
    }

    return null
  }

  setUsuario(usuario: Usuario): void {
    localStorage.setItem(this.KEY, JSON.stringify(usuario))
  }

  removeUsuario(): void {
    localStorage.removeItem(this.KEY)
  }
  
}
