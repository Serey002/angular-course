import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-event-binding',
  styleUrl: './event-binding.component.css',
  templateUrl: './event-binding.component.html',
})
export class EventBindingComponent {
  text = ""
  hello() {
    this.text = "Hello"
  }


  searchFood(event: Event) {
    const input = event.target as HTMLInputElement;
    console.log('Searching for:', input.value);
  }
}
