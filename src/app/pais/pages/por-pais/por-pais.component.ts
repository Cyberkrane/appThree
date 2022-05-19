import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

//propiedades

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];

  // inyeccion de un servicio =>>   constructor( private paisService: PaisService )

  constructor(private paisService: PaisService) { }

  //implementacion de un metodo =>> buscar()

  buscar( termino: string ) {

    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(termino)
    .subscribe((paises) => {
        console.log(paises);
        this.paises = paises;
        
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      })
  }
}
