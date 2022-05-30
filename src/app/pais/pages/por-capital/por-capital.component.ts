import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

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

   this.paisService.buscarCapital(termino)
   .subscribe((paises) => {
       this.paises = paises;
       
     }, (err) => {
       this.hayError = true;
       this.paises = [];
     })
 }

}
