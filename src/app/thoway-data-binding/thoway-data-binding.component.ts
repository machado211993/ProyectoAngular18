import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-thoway-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './thoway-data-binding.component.html',
  styleUrl: './thoway-data-binding.component.css'
})
export class ThowayDataBindingComponent {
  nombre: string = '';
}
