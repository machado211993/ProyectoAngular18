import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  standalone: true,
  imports: [],
  template: `<h1>{{ mensaje }}</h1>`,
  styles: [`
    h1 { font-family: Arial, sans-serif; }
    img { width: 100px; height: 100px; }
    h1{color: brown}
    `]
    })
export class InterpolacionComponent {
  
    mensaje = '¡Hola, soy una interpolacion!';
}
