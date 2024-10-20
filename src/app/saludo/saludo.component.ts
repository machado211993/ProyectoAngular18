import { Component } from '@angular/core';
import { PersonaComponent } from '../persona/persona.component';

@Component({
  selector: 'app-saludo', //define como se utiliza el componente en hmtl (app.html)
  standalone: true,
  imports: [PersonaComponent], //estoy importando la clase (logica del componente en typescript)
  templateUrl: './saludo.component.html', //estructura visual html 
  styleUrl: './saludo.component.css'
})
export class SaludoComponent {

}
