import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hello-badge',
  styleUrl: './hello-badge.component.css',
  templateUrl: './hello-badge.component.html',
})
export class HelloBadgeComponent {
  @Input() name = 'stranger';
}
