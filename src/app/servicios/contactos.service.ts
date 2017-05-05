import {Injectable} from '@angular/core';

import { Contacto } from '../entidades/contacto';

@Injectable()
export class ContactosService {
    obtenerContactos(): Contacto[]{
        return [
            Contacto.desdeJSON({
                id:1,
                nombre: 'Steve',
                apellidos: 'Jobs',
                email: 'steveJobs@elmolon.es',
                telefono: '627183712',
                twitter:'steveJobs',
                facebook:'steveJobs',
                avatar:''
            }),
            Contacto.desdeJSON({
                id:2,
                nombre: "Bill ",
                apellidos: 'Gates',
                email: 'billGates@elmaschulo.es',
                telefono: '189371781',
                twitter:'billGates',
                facebook:'billGates',
                avatar:''
            }),
            Contacto.desdeJSON({
                id:3,
                nombre: 'Elon ',
                apellidos: 'Musk',
                email: 'elonMusk@gmail.com',
                telefono: '7845829322',
                twitter:'elonMusk',
                facebook:'elonMusk',
                avatar:''
            })
        ];
    }
}