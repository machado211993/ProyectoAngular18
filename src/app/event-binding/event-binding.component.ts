import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [],
  template: `<h1>demostracion de event binding</h1>
  <button (click)="mostrarMensaje()"> click me</button>
  <p>{{mensaje}}</p>
  `,
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  mensaje: string = '';
  mostrarMensaje() {
    this.mensaje = '!has hecho clic en el boton !';
  }
}