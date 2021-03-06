"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var FormularioContactoComponent = (function () {
    function FormularioContactoComponent() {
    }
    FormularioContactoComponent.prototype.guardarContacto = function (contactoForm) {
        console.log(contactoForm);
    };
    return FormularioContactoComponent;
}());
FormularioContactoComponent = __decorate([
    core_1.Component({
        selector: 'formulario-contacto',
        templateUrl: '/app/formulario-contacto/formulario-contacto.component.html',
        styles: ["button:disabled{background-color: lightgrey; border: 1px solid gray;}"]
    })
], FormularioContactoComponent);
exports.FormularioContactoComponent = FormularioContactoComponent;
//# sourceMappingURL=formulario-contacto.component.js.map