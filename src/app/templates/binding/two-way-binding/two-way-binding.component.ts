import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BetweenComponentComponent } from './between-component/between-component.component';

@Component({
  imports: [FormsModule, BetweenComponentComponent],
  selector: 'app-two-way-binding',
  styleUrl: './two-way-binding.component.css',
  templateUrl: './two-way-binding.component.html',
})
export class TwoWayBindingComponent {

  textValue: string = '';
  isAvailable = true

  //
  foodName = "Burger"
}
