import {Component} from '@angular/core';

@Component({
    selector: 'ejemplos-binding',
    templateUrl: '/app/ejemplos/ejemplos-binding.component.html',
    styles:[`
        .caja{
        width:50px;
        height: 50px;
        background-color: red;
        }
    `]
})

export class EjemplosBindingComponent{
    name = 'Babel';

    numeroDeLaSuerte: number = 43;

    //binding de propiedades
    textAreaLineas: number = 6;
    //binding de clase
    pintamosClase: boolean = true;
    mensaje:string = "cambiame";

    clases: any = { uno: true, dos: false, tres: true}
    constructor(){
    }

    //binding de estilos
    obtenerColor(): string{
        return 'green';
    }

    obtenerEstilos(): any{
        return {
        backgroundColor: 'green',
        color: 'white'
        };
    }

    mostrarMensaje(): void{
        alert('Hola señores');
    }

}