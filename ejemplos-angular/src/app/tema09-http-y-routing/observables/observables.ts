import { Component, signal } from '@angular/core';
import { interval, Observable, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-observables',
  imports: [],
  templateUrl: './observables.html',
  styleUrl: './observables.css',
})
export class Observables {
  cuenta = signal<number>(0)
  cuenta2 = signal<number>(0)

  subscriptions = new Subscription()

  ngOnInit() {

    // interval(1000)
    //   .subscribe(
    //     (num: number) => this.cuenta.set(num)
    //   )

    const sub1 = interval(1000)
      .subscribe({
        next: (num: number) => {
          this.cuenta.set(num)
          console.log('INTERVAL: ', num)
        },
      })

    this.subscriptions.add(sub1)


    // const sub2 = this.miIntervalo().subscribe({
    //   next: (n: number) => {
    //     console.log('He recibido un dato: ' + n)
    //     this.cuenta2.set(n)
    //   }
    // })

    const sub3 = this.miIntervalo(2000, 20).subscribe({
      next: (n: number) => {
        console.log('He recibido un número: ' + n)
      },
      error: (err: Error) => {
        console.log(err)
      },
      complete: () => {
        console.log('FIN')
      }
    })

    // this.subscriptions.add(sub2)
    this.subscriptions.add(sub3)

  }

  miIntervalo(ms: number = 1000, contarHasta: number = 30): Observable<any> {
    const miIntervalo = new Observable((subscriber: Subscriber<number>) => {
        let num = 0
        
        const intervalId = setInterval(() => {
          num += 2
          console.log(num)

          // if (num > 6) {
          //   subscriber.error('Te has pasado contando')
          // }

          if (num >= contarHasta) {
            clearInterval(intervalId)
            subscriber.complete()
            return
          }
          
          subscriber.next(num)
        }, ms)
      })

    return miIntervalo
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }

}
