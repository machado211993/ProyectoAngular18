import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-direc-atributo',
  standalone: true,
  imports: [CommonModule], //hay q importar commonModule
  templateUrl: './direc-atributo.component.html',
  styleUrl: './direc-atributo.component.css'
})
export class DirecAtributoComponent {
  // Aplica la clase 'activo' si isActive es true
  isActive: boolean = false;
  title = "clase-2";

}
