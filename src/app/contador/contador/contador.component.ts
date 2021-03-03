//                  //Ocupamos el decorador para convertir la 
//                  //  clase en un componente propio de angular.
import {Component} from '@angular/core'

@Component({
    selector : 'app-contador',

    //                //Normalmente ponemos una ruta
    //                //  de donde se encuentra el 
    //                //  documente HTML.
    //templateUrl: 'app.component.html' 

    //                //Ponemos HTML en una sola Linea.
    // template : '<span>Hola Soy Cesar</span>'

    //                //Ponemos HTML multilinea.
    template : `
        
        <h1>Hola Mundo :) , {{ tituloCesar}} : {{ 1 + 1}}</h1>
        <h3>La base es : <strong>{{ base }}</strong></h3>

        <button (click) = "acumular(-base)"> -{{ base }}</button>
        <span>{{numero}}</span>
        <button (click) = "acumular(+base);">  + {{ base }}</button>
    `
})

//                  //Le pongo export porque lo quiero utilizar 
//                  //  porque lo quiero utilizar en otros 
//                  //  lugares fuera de este archivo.
export class ContadorComponent {
    public tituloCesar : String = 'Contador APP.';
    public numero : number = 10;
    public base : number = 5;

    public acumular(valor : number) : void{
        this.numero += valor;

    }
}