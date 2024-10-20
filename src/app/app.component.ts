import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SaludoComponent} from './saludo/saludo.component';

@Component({
  selector: 'app-root', //define como se utiliza el componente en hmtl (app.html)
  standalone: true,
  imports: [RouterOutlet, SaludoComponent], //estoy importando la clase (logica del componente en typescript)
  templateUrl: './app.component.html', //estructura visual html 
  styleUrl: './app.component.css'
})
export class AppComponent {
  mensaje: string = '¡Hola desde un template externo!';
  nombre : string = 'mi nombre es jose manuel machado';
}
//aca arranca la aplicacion app.component.ts
//tiene un selector q es app-root 
//tine un template 