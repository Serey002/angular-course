import { Component } from '@angular/core';
import { NgOnChangesComponent } from "./components/ng-on-changes/ng-on-changes.component";
import { NgOnInitComponent } from "./components/ng-on-init/ng-on-init.component";



@Component({
  selector: 'app-root',
  imports: [NgOnChangesComponent, NgOnInitComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  foodName = 'Burger';
  changeFoodName() {
    this.foodName = 'Sushi';
  }
}
