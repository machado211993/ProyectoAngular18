import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SaludoComponent } from './saludo/saludo.component';
import { PersonaComponent } from './persona/persona.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { ThowayDataBindingComponent } from './thoway-data-binding/thoway-data-binding.component';
import { DirecAtributoComponent } from './direc-atributo/direc-atributo.component';
import { DirecEstructuralComponent } from './direc-estructural/direc-estructural.component';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root', //define como se utiliza el componente en hmtl (app.html)
  standalone: true,
  imports: [RouterOutlet, SaludoComponent, InterpolacionComponent, PropertyBindingComponent, EventBindingComponent, ThowayDataBindingComponent, DirecAtributoComponent, DirecEstructuralComponent], //estoy importando la clase (logica del componente en typescript)
  templateUrl: './app.component.html', //estructura visual html import { TwowayDataBindingComponent, ThowayDataBindingComponent } from './thoway-data-binding/thoway-data-binding.component';

  styleUrl: './app.component.css'
})
export class AppComponent {
  mensaje: string = '¡Hola desde un template externo!';
  nombre: string = 'mi nombre es jose manuel machado';
}
//aca arranca la aplicacion app.component.ts
//tiene un selector q es app-root
//tine un template 