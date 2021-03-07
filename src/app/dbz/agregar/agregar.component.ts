import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPersonaje } from '../Interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input() public nuevo : IPersonaje = {
    nombre : '',
    poder : 0
  }; 

  //                //EventEmitter es un tipo Generico
  //                //   y en este caso voy a emitir personaje.
  //                //El Output sirve para emitir eventos y entre 
  //                //  y entre las siguientes llaves  condicionales 
  //                //  <tipo de dato a enviarse en el evento> se especifica
  //                //  el tipo de dato que se tiene que enviar.
  // @Output() public onNuevoPersonaje: EventEmitter<IPersonaje> = 
  //   new EventEmitter<IPersonaje>();

  //------------------------------------------------------------------------------------------                                
  constructor(
    //              //Inyectamos la dependencia del servicio
    //              //  para que lo puedamos utilizar en cualquier
    //              //  parte de la clase.
    private dbzService : DbzService
  )
  {  
    
  }

  //------------------------------------------------------------------------------------------
  public agregar(
  //                //Agrega nuevo personaje.

  ) : void
  {
    if(
      this.nuevo.nombre.trim().length === 0
    ){
      return;
    }

    //              //Aqui se emite el evento.
    // this.onNuevoPersonaje.emit(this.nuevo);

    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre : "",
      poder : 0
    }    
  }
}
