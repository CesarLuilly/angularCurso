import { Component} from '@angular/core';
import { IPersonaje } from '../Interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

  public personajes : IPersonaje[] = [
    {
      nombre : "Goku",
      poder : 10000
    },
    {
      nombre : "Vegeta",
      poder : 15000
    }
  ]


  public nuevo : IPersonaje = {
      nombre : 'Mestro Roshi',
      poder : 1000
  }

  public agregarNuevoPersonaje(argumento : IPersonaje){
    
    console.log("-- Inicio Componente Padre --")

    console.log(argumento);
    this.personajes.push(argumento);

    console.log("-- Fin Componente Padre --")
  }

  public cambiarNombre(event : any) : void{
    //              //Con la siguiente linea evitamos 
    //              //  el evento por defecto(de que se refresque.).
    // event.preventDefault(); //Pero esto es muy tedioss.
    console.log(event);
    console.log(event.target.value);
  }


}
