import { Component } from '@angular/core';

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    //template: '<h1>Listado de Personas</h1><app-persona></app-persona><app-persona></app-persona>'
    styleUrls: ['./personas.component.css']
})
export class PersonasComponent{
    desahabilitar = false;
    mensaje = 'No se ha agregado ninguna persona';
    titulo = 'NSH';
    mostrar = false;

    agregarPersona(){
        this.mostrar = true;
        this.mensaje='Persona agregada'
    }

    /*modificarTitulo(event: Event){
        this.titulo = (<HTMLInputElement>event.target).value;
    }*/
}