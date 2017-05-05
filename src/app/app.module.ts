import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent }  from './app.component';
import { CajaComponent }  from './ejemplos/caja.component';
import { EjemplosBindingComponent }  from './ejemplos/ejemplos-binding.component';
import { EjemplosComponentesComponent }  from './ejemplos/ejemplos-componentes.component';
import { listaContactosComponent }  from './lista-contactos/lista-contactos.component';
import { ContactosService } from './servicios/contactos.service';
import { DetallesContactoComponent } from './detalles-contacto/detalles-contacto.component';
import { EjemplosInyeccionComponent, Servicio1, Servicio2, Servicio2Provider } from './ejemplos/ejemplos-inyeccion.component';

@NgModule({
  imports: [ // Metemos todos los módulos que necesita mi app
    BrowserModule,
    FormsModule
  ],

  declarations: [ // Metemos todos los componentes, directivas y pipes
    AppComponent,
    CajaComponent,
    EjemplosBindingComponent,
    EjemplosComponentesComponent,
    listaContactosComponent,
    DetallesContactoComponent,
    EjemplosInyeccionComponent      
  ],

  providers:[
    ContactosService,
    Servicio1, //Este tiene @Inyectable
    Servicio2Provider
  ],   //Metemos los servicios

  bootstrap:    [ AppComponent ]  //Componente raíz de nuestra app
})

export class AppModule { }
