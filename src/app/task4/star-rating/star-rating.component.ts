import { Component, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common'

@Component({
  imports: [NgFor],
  selector: 'app-star-rating',
  styleUrl: './star-rating.component.css',
  templateUrl: './star-rating.component.html',
})
export class StarRatingComponent {

  @Output() ratingSelected = new EventEmitter<number>();

  selectedRating = 0;

  selectRating(starValue: number) {
    this.selectedRating = starValue;
    this.ratingSelected.emit(starValue)
  }
}
