import { Component} from '@angular/core';
import { IPersonaje } from '../Interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';
import { PersonajesComponent } from '../personajes/personajes.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{
    
  public nuevo : IPersonaje = {
      nombre : 'Mestro Roshi',
      poder : 1000
  }

  constructor() { }
}
