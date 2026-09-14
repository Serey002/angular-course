import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-interpolation',
  styleUrl: './interpolation.component.css',
  templateUrl: './interpolation.component.html',
})
export class InterpolationComponent {
  text = "This is The Interpolation use double curly braces {{}} for display data from TypeScript to HTML"
  test() {
    return "Display data from function"
  }
}
