import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPersonaje } from '../Interfaces/dbz.interface';

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

    //              //EventEmitter es un tipo Generico
    //              //   y en este caso voy a emitir personaje.
    //              //El Output sirve para emitir eventos y entre 
    //              //  y entre las siguientes llaves  condicionales 
    //              //  <tipo de dato a enviarse en el evento> se especifica
    //              //  el tipo de dato que se tiene que enviar.
    @Output() public onNuevoPersonaje: EventEmitter<IPersonaje> = 
      new EventEmitter<IPersonaje>();

    public agregar() : void{
      if(
        this.nuevo.nombre.trim().length === 0
      ){
        return;
      }

      console.log("-- Inicio Componente hijo --")
      console.log(this.nuevo);

      //            //Aqui se emite el evento.
      this.onNuevoPersonaje.emit(this.nuevo);

      console.log("-- Fin Componente hijo --")

      this.nuevo = {
        nombre : "",
        poder : 0
      }
      //              //Con la siguiente linea evitamos 
      //              //  el evento por defecto(de que se refresque.).
      // event.preventDefault(); //Pero esto es muy tedioss.
      
    }
}
