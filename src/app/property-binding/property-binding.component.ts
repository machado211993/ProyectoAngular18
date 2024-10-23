import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [],
  template: `
<h1>Demostración de Property Binding</h1>
<img [src]="imagenUrl" alt="Logo de Angular">
<p [style.color]="colorTexto">Este texto cambia de color dinámicamente</p>
<button [disabled]="botonDeshabilitado">Botón</button>
`,
styles: [`
  h1 { font-family: Arial, sans-serif; }
  img { width: 100px; height: 100px; }
  `]
  })
export class PropertyBindingComponent {
  imagenUrl: string = 'https://angular.io/assets/images/logos/angular/angular.svg'; //pasa a variable la imagen
  colorTexto: string = 'blue'; //color azul al texto
  botonDeshabilitado: boolean = true;  //desactiva o activa el boton
}
