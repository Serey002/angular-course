import { Component } from '@angular/core';
import { NgOnChangesComponent } from "./components/ng-on-changes/ng-on-changes.component";
import { NgOnInitComponent } from "./components/ng-on-init/ng-on-init.component";
import { NgAfterViewInitComponent } from "./components/ng-after-view-init/ng-after-view-init.component";
import { NgOnDestroyComponent } from './components/ng-on-destroy/ng-on-destroy.component';



@Component({
  selector: 'app-root',
  imports: [NgOnChangesComponent, NgOnInitComponent, NgAfterViewInitComponent, NgOnDestroyComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  foodName = 'Burger';
  changeFoodName() {
    this.foodName = 'Sushi';
  }
}
