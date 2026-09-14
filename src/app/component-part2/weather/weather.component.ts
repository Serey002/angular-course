import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-weather',
  styleUrl: './weather.component.css',
  templateUrl: './weather.component.html',
})
export class WeatherComponent {

  hidden = signal(false);
}
