import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-direc-estructural',
  standalone: true,
  imports: [CommonModule],
  template: `
<h1>Ejemplo de ngIf</h1>
<p *ngIf="mostrar">Este texto es visible cuando "mostrar" es verdadero.</p>
<button (click)="toggleMostrar()">Mostrar/Ocultar</button>
`
})
export class DirecEstructuralComponent {
  mostrar: boolean = true;
  toggleMostrar() {
    this.mostrar = !this.mostrar;
  }
}
