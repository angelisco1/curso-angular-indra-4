import { Injectable, signal, WritableSignal } from '@angular/core';

export type Lang = {
  codigo: string,
  texto: string
}

const TRADUCCIONES: {[key: string]: {[key: string]: string}} = {
  'es': {
    'mostrar_mensaje': 'Mostrar mensaje',
    'mostrar_error': 'Mostrar error',
    'bienvenido': 'Bienvenido',
  },
  'en': {
    'mostrar_mensaje': 'Show message',
    'mostrar_error': 'Show error',
    'bienvenido': 'Welcome',
  },
  'it': {
    'mostrar_mensaje': 'Mostra messaggio',
    'mostrar_error': 'Mostra errore',
    'bienvenido': 'Benvenuto',
  },
  'pt': {
    'mostrar_mensaje': 'Mostrar mensagem',
    'mostrar_error': 'Mostrar erro',
    'bienvenido': 'Bem-vindo',
  },
}



@Injectable({
  providedIn: 'root',
})
export class Traductor {
  lenguajes: Array<Lang> = [
    { codigo: 'es', texto: 'Español' },
    { codigo: 'en', texto: 'Inglés' },
    { codigo: 'it', texto: 'Italiano' },
    { codigo: 'pt', texto: 'Portugues' },
  ]
  
  lang = signal<Lang>(this.lenguajes[2])
  
  traducir(lang: Lang, texto: string): string {
    return TRADUCCIONES[lang.codigo][texto]
  }
  
}
