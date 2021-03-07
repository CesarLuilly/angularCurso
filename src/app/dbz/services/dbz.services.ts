import { Injectable } from "@angular/core";


@Injectable()
export class DbzService {
    //              //Hasta que alguien requiera la instancia es cuando
    //              //  se va a crear la primera instancia, y de ahi en 
    //              //  adelante se utilzar la misma instantacia para
    //              //  cualquier componente, servicio, pipe y quien sea
    //              //  que lo consuma.                                   

    constructor(){
        console.log("Servicio Inicializado");
    }
    
}

