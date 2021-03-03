//                  //Ocupamos el decorador para convertir la 
//                  //  clase en un componente propio de angular.
import {Component} from '@angular/core'

@Component({
    selector : 'app-heroe',
    templateUrl: 'heroe.component.html'   
})

//                  //Le pongo export porque lo quiero utilizar 
//                  //  porque lo quiero utilizar en otros 
//                  //  lugares fuera de este archivo.
export class HeroeComponent {
    public nombre : String  = 'IronMan';
    public edad : number = 10;

    //              //Getter.
    get nombreCapitalizado () : String{
        return this.nombre.toUpperCase();
    }   
    
    //              Capitlazado.
    public obtenerNombre (): String {
        return `${this.nombre} - ${this.edad}`;
    }

    public cambiarNombre () : void{
        this.nombre = 'Spiderman';
    }

    public cambiarEdad () : void{
        this.edad = 50;
    }


}