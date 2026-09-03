import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { OrderFormComponent } from './order-form/order-form.component';

@Component({
  selector: 'app-root',
  imports: [FoodDetailsComponent, OrderFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  @ViewChild('containers', { read: ViewContainerRef})
  container!: ViewContainerRef;

  showFoodDatails() {
    this.container.createComponent(FoodDetailsComponent);
  }

  showOrderForm() {
    this.container.clear()
    this.container.createComponent(OrderFormComponent)
  }

  clearForm() {
    this.container.clear()
  }
}
