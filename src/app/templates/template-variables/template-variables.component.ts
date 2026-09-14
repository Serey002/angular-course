import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-template-variables',
  styleUrl: './template-variables.component.css',
  templateUrl: './template-variables.component.html',
})
export class TemplateVariablesComponent {
  foodName!: string;
  quantity!: number;

  orderFood(foodName: string, quantity: number) {
    foodName = this.foodName
    quantity = this.quantity
  }
}
