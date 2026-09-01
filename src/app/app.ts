import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherContentComponent } from './components/weather-content/weather-content.component';
import { WeatherTopBarComponent } from './components/weather-top-bar/weather-top-bar.component';
import { WeatherBottomDetailComponent } from './components/weather-bottom-detail/weather-bottom-detail.component';
@Component({
  selector: 'app-root',
  imports: [NgIf, WeatherComponent, WeatherContentComponent, WeatherTopBarComponent, WeatherBottomDetailComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isLoggedIn = true;
}
