import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor: pointer;
      list-style: none
    }
    `
  ]
})
export class PorPaisComponent {

//propiedades

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos : Country[] = [];
  mostrarSugerencias : boolean = false;
 
  // inyeccion de un servicio =>>   constructor( private paisService: PaisService )

  constructor(private paisService: PaisService) { }

  //implementacion de un metodo =>> buscar()

  buscar( termino: string ) {
    this.mostrarSugerencias = false
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(termino)
    .subscribe((paises) => {
        this.paises = paises; 
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      })
  }

  sugerencias( termino: string ){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais( termino )
    .subscribe( 
      paises => this.paisesSugeridos = paises.splice(0,5),
      (err) => this.paisesSugeridos = []
      );
  }

  buscarSugerido( termino: string ){
    this.buscar( termino )
  }
}
