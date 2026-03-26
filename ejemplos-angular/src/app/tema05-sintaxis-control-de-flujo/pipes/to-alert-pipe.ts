import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toAlert',
})
export class ToAlertPipe implements PipeTransform {

  transform(value: number, mensaje: string = 'Poco stock', limite: number = 30): string {
    if (value < limite) {
      return mensaje
    }
    
    return '';
  }

}
