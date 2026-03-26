import { Component, signal } from '@angular/core';
import { Tema01DataBinding } from "./tema01-data-binding/tema01-data-binding";
import { Tema02Signals } from "./tema02-signals/tema02-signals";
import { Tema03InputOutput } from "./tema03-input-output/tema03-input-output";
import { Tema04Pipes } from "./tema04-pipes/tema04-pipes";
import { Tema05SintaxisControlDeFlujo } from "./tema05-sintaxis-control-de-flujo/tema05-sintaxis-control-de-flujo";
import { Tema06Formularios } from "./tema06-formularios/tema06-formularios";


@Component({
  selector: 'app-root',
  imports: [
    Tema01DataBinding,
    Tema02Signals,
    Tema03InputOutput,
    Tema04Pipes,
    Tema05SintaxisControlDeFlujo,
    Tema06Formularios
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
