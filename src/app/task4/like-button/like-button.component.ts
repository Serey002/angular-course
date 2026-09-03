import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-like-button',
  styleUrl: './like-button.component.css',
  templateUrl: './like-button.component.html',
})
export class LikeButtonComponent {
  @Output() liked = new EventEmitter<void>();

  onLiked() {
    this.liked.emit();
  }
}
