import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'formulario-contacto',
    templateUrl: '/app/formulario-contacto/formulario-contacto.component.html',
    styles: [`button:disabled{background-color: lightgrey; border: 1px solid gray;}`]
})

export class FormularioContactoComponent  {
    guardarContacto(contactoForm:FormGroup){
        console.log(contactoForm);
    }
}