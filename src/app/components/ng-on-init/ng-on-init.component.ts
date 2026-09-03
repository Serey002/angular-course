import { Component, OnInit } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-ng-on-init',
  styleUrl: './ng-on-init.component.css',
  templateUrl: './ng-on-init.component.html',
})
export class NgOnInitComponent implements OnInit {

  foods: { id: number; name: string; price: number }[] = [];

  ngOnInit(): void {
    this.loadFoods();
    console.log("Food initialized")
  }

  loadFoods() {
    this.foods = [
      {
        id: 1,
        name: 'Burger',
        price: 8.99
      },
      {
        id: 2,
        name: 'Pizza',
        price: 10.99
      }
    ];
  }

}
