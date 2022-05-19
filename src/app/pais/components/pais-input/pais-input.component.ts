import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent  implements OnInit{
  

  @Output() onEnter: EventEmitter<string> = new EventEmitter(); 
  @Output() onDebounce: EventEmitter<string> = new EventEmitter(); 

  @Input() placeholder: string = "";

  debouncer: Subject<string> = new Subject(); // asi se crea un Subject(). el Subject es un @Observable especial.

  termino: string = '';

  ngOnInit() {      //se dispara una sola vez cuando el componente ya esta inicializaddo.
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe( valor => {
      this.onDebounce.emit(valor)
    })
  }

  buscar(){
 this.onEnter.emit(this.termino);
 console.log(this.termino + ' enviando desde pais-tabla')
    // this.termino = ''
  }

  teclaPresionada( event: any){
    // const valor = event?.target.value; esta es una forma de hacer un debouncer
    // console.log(valor)
    // console.log(this.termino)

    this.debouncer.next( this.termino )
  }
  // al darle a enter se emite el onEnter()
} 
