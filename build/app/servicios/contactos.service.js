"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var contacto_1 = require("../entidades/contacto");
var ContactosService = (function () {
    function ContactosService() {
    }
    ContactosService.prototype.obtenerContactos = function () {
        return [
            contacto_1.Contacto.desdeJSON({
                id: 1,
                nombre: 'Steve',
                apellidos: 'Jobs',
                email: 'steveJobs@elmolon.es',
                telefono: '627183712',
                twitter: 'steveJobs',
                facebook: 'steveJobs',
                avatar: ''
            }),
            contacto_1.Contacto.desdeJSON({
                id: 2,
                nombre: "Bill ",
                apellidos: 'Gates',
                email: 'billGates@elmaschulo.es',
                telefono: '189371781',
                twitter: 'billGates',
                facebook: 'billGates',
                avatar: ''
            }),
            contacto_1.Contacto.desdeJSON({
                id: 3,
                nombre: 'Elon ',
                apellidos: 'Musk',
                email: 'elonMusk@gmail.com',
                telefono: '7845829322',
                twitter: 'elonMusk',
                facebook: 'elonMusk',
                avatar: ''
            })
        ];
    };
    return ContactosService;
}());
ContactosService = __decorate([
    core_1.Injectable()
], ContactosService);
exports.ContactosService = ContactosService;
//# sourceMappingURL=contactos.service.js.map