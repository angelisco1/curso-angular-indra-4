import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Logger {

  info(msg: string): void {
    console.log(`[${new Date().toLocaleString()}] - ${msg}`)
  }

  error(err: string): void {
    console.error(`[${new Date().toLocaleString()}] - ${err}`)
  }
  
}
