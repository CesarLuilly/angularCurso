import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.services';

@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule, 
    FormsModule
  ],
  providers:[
    //              //Los provider son los servicios,
    //              //Estos servicios van a servir como singleton,
    //              //    es decir como una unica Instancia a lo largo de
    //              //    todo este modulo DBZ.
    DbzService
  ]
})
export class DbzModule { }
