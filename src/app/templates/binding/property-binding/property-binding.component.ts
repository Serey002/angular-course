import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-property-binding',
  styleUrl: './property-binding.component.css',
  templateUrl: './property-binding.component.html',
})
export class PropertyBindingComponent {
  imageUrl = "https://i.pinimg.com/736x/c1/08/12/c10812d25a1a89a8c48746f1317ce1fe.jpg"
  price = 20
  quantity = 2

  country = {
    image: "https://static01.nyt.com/images/2015/05/17/travel/20150517CAMBODIA-slide-U2FN/20150517CAMBODIA-slide-U2FN-superJumbo.jpg",
    name: "Cambodia",
    city: "Phnom Penh"
  }
}
