import { Component } from '@angular/core';
import { HelloBadgeComponent } from './componentsTask1/hello-badge/hello-badge.component';
import { ClockDisplayComponent } from "./componentsTask1/clock-display/clock-display.component";
import { QuoteBoxComponent } from "./componentsTask1/quote-box/quote-box.component";

@Component({
  selector: 'app-root',
  imports: [HelloBadgeComponent, ClockDisplayComponent, QuoteBoxComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
