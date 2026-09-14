import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-attribute-binding',
  styleUrl: './attribute-binding.component.css',
  templateUrl: './attribute-binding.component.html',
})
export class AttributeBindingComponent {
  foodName = 'Korko'
  foodImage = ""
  foodId = "food-10"
  foodLabel = null;
}
