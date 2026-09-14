import { Component} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-class-binding',
  styleUrl: './class-binding.component.css',
  templateUrl: './class-binding.component.html',
})
export class ClassBindingComponent {
  foodName = 'Soup'
  isVailable = true

  isPopular = true
  isDiscounted = false

  //Class Binding
  price = 29

  //Class Binding Boolean
  foodName2 = "Khmer Noodal"
  isAvailableFood = true

}
