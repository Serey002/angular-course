import { NgIf } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { WeatherComponent } from './weather/weather.component';
import { WeatherContentComponent } from './weather-content/weather-content.component';
import { WeatherTopBarComponent } from './weather-top-bar/weather-top-bar.component';
import { WeatherBottomDetailComponent } from './weather-bottom-detail/weather-bottom-detail.component';

@Component({
    imports: [
    NgIf,
    WeatherComponent,
    WeatherContentComponent,
    WeatherTopBarComponent,
    WeatherBottomDetailComponent,
  ],
  selector: 'app-component-part2',
  styleUrl: './component-part2.component.css',
  templateUrl: './component-part2.component.html',
})
export class ComponentPart2Component {
    isLoggedIn = true;

  @ViewChild('burgerTemplate') burgerTemplate!: TemplateRef<unknown>;
  @ViewChild('pizzaTemplate') pizzaTemplate!: TemplateRef<unknown>;

  @ViewChild('container', { read: ViewContainerRef}) container!: ViewContainerRef;

  showBurger() {
    this.container.clear();
    this.container.createEmbeddedView(this.burgerTemplate);
  }

  showPizza() {
    this.container.clear();
    this.container.createEmbeddedView(this.pizzaTemplate);
  }
}
