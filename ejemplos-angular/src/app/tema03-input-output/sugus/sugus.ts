import { NgClass, NgStyle } from '@angular/common';
import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-sugus',
  imports: [],
  templateUrl: './sugus.html',
  styleUrl: './sugus.css',
})
export class Sugus {

  // sabor: string = 'limón'
  // color: string = 'gold'
  sabor = input<string>('limón')
  color = input<string>('gold')

}
