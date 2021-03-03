import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations:[
        //              //Las declaraciones disen que cosas 
        //              //  contienen este modulo, tal como 
        //              //  component, pipes, etc.
            ContadorComponent
        ],
        //              //Otra pieza fundamental de modulos son:
        //              //  que piezas quiero que sean visibles afuera
        //              //  de este modulo().
        exports:[
        //              //Este export significa que cosas quiero hacer 
        //              //  publicas o visibles fuera de este modulo.
            ContadorComponent
        ],
        imports:[
        //              //Cuando veamos la palabra imports, significa
        //              //que aqui adentro van modulos y solo modulos.
    
        //              //Este CommonModule nos ofrece herramientas comunes,
        //              //  de angular, tal como el caso, *ngFor , *ngIf
            CommonModule
        ]              
})
export class ContadorModule{}

