import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-between-component',
  styleUrl: './between-component.component.css',
  templateUrl: './between-component.component.html',
})
export class BetweenComponentComponent {

  @Input() foodName!: string;
  @Output() foodNameChange = new EventEmitter<string>();
}
