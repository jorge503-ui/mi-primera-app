import { Component } from '@angular/core';

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    //template: '<h1>Listado de Personas</h1><app-persona></app-persona><app-persona></app-persona>'
    styleUrls: ['./personas.component.css']
})
export class PersonasComponent{
    desahabilitar = false;
}