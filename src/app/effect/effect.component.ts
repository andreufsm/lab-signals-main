import { Component } from '@angular/core';
import { ElementoService, Elemento } from './../elemento.service';

@Component({
  selector: 'app-effect',
  templateUrl: './effect.component.html',
  styleUrls: ['./effect.component.css'],
})
export class EffectComponent {
  constructor(public elementoService: ElementoService) {}

  selecionarElemento(elemento: Elemento) {
    this.elementoService.selecionarElemento(elemento);
  }

  ajustarTemperatura(novaTemperatura: number) {
    this.elementoService.ajustarTemperatura(novaTemperatura);
  }
}
