import { Component } from '@angular/core';
import { HelloBadgeComponent } from './componentsTask1/hello-badge/hello-badge.component';
import { ClockDisplayComponent } from "./componentsTask1/clock-display/clock-display.component";
import { QuoteBoxComponent } from "./componentsTask1/quote-box/quote-box.component";
import { FooterComponent } from './componentsTask2/footer/footer.component';
import { HeaderComponent } from './componentsTask2/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatsGridComponent } from './stats-grid/stats-grid.component';
import { PriceTagComponent } from './task3/price-tag/price-tag.component';
import { NgFor } from '@angular/common';

import { ProgressBarComponent } from './task3/progress-bar/progress-bar.component';
import { LikeButtonComponent } from './task4/like-button/like-button.component';
import { StarRatingComponent } from './task4/star-rating/star-rating.component';
import { TodoItemComponent } from './task4/todo-item/todo-item.component';
@Component({
  selector: 'app-root',
  imports: [
    HelloBadgeComponent,
    ClockDisplayComponent,
    QuoteBoxComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    StatsGridComponent,
    PriceTagComponent,
    NgFor,

    ProgressBarComponent,

    LikeButtonComponent,

    StarRatingComponent,

    TodoItemComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  products = [
    {
      name: 'Laptop',
      price: 2200000,
      currency: 'KH'
    },
    {
      name: 'Phone',
      price: 900000,
      currency: 'KH'
    },
    {
      name: 'Keyboard',
      price: 80,
      currency: 'USD'
    },
    {
      name: 'Watch',
      price: 350,
      currency: 'USD'
    }
  ];

  // 4.1
  likeCount = 0

  onLiked() {
    this.likeCount++
  }

  // 4.2
  selectedRating = 0;
  onRating(rating: number) {
    this.selectedRating = rating;
  }

  //4.3
  todos = [
    {id: 1, text: "Learn Angular"},
    {id: 2, text: "Learn Kotlin"},
    {id: 3, text: "Learn TypeScript"}
  ]

  onRemove(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }




}
