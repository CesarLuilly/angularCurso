import { Injectable } from "@angular/core";
import { IPersonaje } from '../Interfaces/dbz.interface';


@Injectable()
export class DbzService {

  private _personajes : IPersonaje[] = [
      {
        nombre : "Goku", 
        poder : 10000
      },
      {
        nombre : "Vegeta",
        poder : 15000
      }
    ];
      
  //------------------------------------------------------------------------------------------   
  public get personajes() : IPersonaje[] {
    //          //El inconveniente, es que javascript todo lo manda
    //          //  por referencia, y al hacer esto se puede manipualar
    //          //  la data aunque este marcado como private.
    // return this._personajes;

    //          //Como buena practica, hay que romper la referencia.
    //          //Entonces para solucionar este problema, hacemos uso de 
    //          //  spread syntax(sintaxis extendida) del operador spread,
    //          //  y lo que hace es separar cada uno de los elementos que 
    //          //  tiene ese arreglo y se crea uno nuevo, y de esta manera
    //          //  rompemos la referencia..
    return [...this._personajes];
  }   

  //------------------------------------------------------------------------------------------                                
  constructor(){
      //          //Hasta que alguien requiera la instancia es cuando
      //          //  se va a crear la primera instancia, y de ahi en 
      //          //  adelante se utilzar la misma instantacia para
      //          //  cualquier componente, servicio, pipe y quien sea
      //          //  que lo consuma.       
  }

  //------------------------------------------------------------------------------------------
  public agregarPersonaje( 
    //              //Agregar personaje.

    personaje : IPersonaje )
  {
    this._personajes.push(personaje)
  }   
}

