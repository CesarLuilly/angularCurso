import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  public heroes : String[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  public heroeTemp : String = "";


  constructor() {
    console.log("Constructor");
   }

  public borrarHeroe () : void{
    //              //si el metodo devuelve undefined, entonces
    //              //  imprime un string vacio.
    this.heroeTemp = this.heroes.shift() || "";;
  }
}
