import { Component, Input} from '@angular/core';
import { IPersonaje } from '../Interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

  //                //Agregamos al decorador.
  //                //Lo que significa, que con este input, 
  //                //  tus personajes van a venir del componente
  //                //  padre.
  
  @Input() personajes : IPersonaje[] = [];





}
