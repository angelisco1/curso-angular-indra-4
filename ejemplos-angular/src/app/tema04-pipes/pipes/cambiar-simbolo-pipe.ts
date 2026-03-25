import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambiarSimbolo',
})
export class CambiarSimboloPipe implements PipeTransform {

  transform(value: string | null, ponerIzq: boolean = false): string {

    if (!value) {
      return ''
    }
    
    // '€190.85'
    // const simbolo = value[0]
    // const numero = value.slice(1)
    
    // 'A$190.85'
    // 'PST190.85'
    if (ponerIzq) {
      const info = value.match(/[$€A-Za-z]+/)
      if (!info) {
        return ''
      }
      console.log(info)

      const numero = value.slice(0, info?.index)
      const simbolo = info[0]

      return simbolo + numero
    }

    const info = value.match(/(?<=)\d+\.\d+/)
    if (!info) {
      return ''
    }

    const simbolo = value.slice(0, info?.index)
    const numero = info[0]

    return numero + simbolo;
  }

}
