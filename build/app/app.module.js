"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var caja_component_1 = require("./ejemplos/caja.component");
var ejemplos_binding_component_1 = require("./ejemplos/ejemplos-binding.component");
var ejemplos_componentes_component_1 = require("./ejemplos/ejemplos-componentes.component");
var lista_contactos_component_1 = require("./lista-contactos/lista-contactos.component");
var contactos_service_1 = require("./servicios/contactos.service");
var detalles_contacto_component_1 = require("./detalles-contacto/detalles-contacto.component");
var ejemplos_inyeccion_component_1 = require("./ejemplos/ejemplos-inyeccion.component");
var formulario_contacto_component_1 = require("./formulario-contacto/formulario-contacto.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            caja_component_1.CajaComponent,
            ejemplos_binding_component_1.EjemplosBindingComponent,
            ejemplos_componentes_component_1.EjemplosComponentesComponent,
            lista_contactos_component_1.listaContactosComponent,
            detalles_contacto_component_1.DetallesContactoComponent,
            ejemplos_inyeccion_component_1.EjemplosInyeccionComponent,
            formulario_contacto_component_1.FormularioContactoComponent
        ],
        providers: [
            contactos_service_1.ContactosService,
            ejemplos_inyeccion_component_1.Servicio1,
            ejemplos_inyeccion_component_1.Servicio2Provider
        ],
        bootstrap: [app_component_1.AppComponent] //Componente raíz de nuestra app
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map