import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent {

  @Output() onEnter: EventEmitter<string> = new EventEmitter(); 

  termino: string = '';

  buscar(){
 this.onEnter.emit(this.termino);
 console.log(this.termino + ' enviado desde pais-tabla')
    // this.termino = ''
  }
  // al darle a enter se emite el onEnter()
}
