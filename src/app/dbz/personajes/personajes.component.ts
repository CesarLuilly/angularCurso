import { Component, Input} from '@angular/core';
import { IPersonaje } from '../Interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

  //                //Agregamos al decorador.
  //                //Lo que significa, que con este input, 
  //                //  tus personajes van a venir del componente
  //                //  padre.
  // @Input() personajes : IPersonaje[] = [];

  //------------------------------------------------------------------------------------------
  public get personajes(){
    
    return this.dbzService.personajes;
  }

  constructor(
  //                //A esto se le conoce como una inyecion de 
  //                //  dependencia.
  //                //Como ya se inyecto en el main-page
  //                //  estariamos esperando que se creen 2
  //                //  instancias, pero no se hace eso, 
  //                //  ya que angular sabe que ya fue instanciado el
  //                //  mismo servicio.
  private dbzService : DbzService
  ) 
  {
  
  }
}
