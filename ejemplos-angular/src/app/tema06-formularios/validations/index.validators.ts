import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {

  // Closure
  static passwordSegura2(simbolos: string, quieresMayus: boolean): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
      const simbolosRegexp = new RegExp(`[${simbolos}]+`)

      if (!simbolosRegexp.test(control.value)) {
        return {
          'simbolos': simbolos
        }
      }

      if (quieresMayus && control.value === control.value.toLowerCase()) {
        return {
          'mayus': true
        }
      }

      return null
    }
    
  }

  static passwordSegura(control: AbstractControl): ValidationErrors | null {
    const simbolosRegexp = new RegExp('[-_\.!$]+')
    
    if (!simbolosRegexp.test(control.value)) {
      return {
        simbolos: '-_.!$'
      }
    }

    if (control.value === control.value.toLowerCase()) {
      return {
        mayus: true
      }
    }
    
    return null
  }

}