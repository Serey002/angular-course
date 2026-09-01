import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-quote-box',
  styleUrl: './quote-box.component.css',
  templateUrl: './quote-box.component.html',
})
export class QuoteBoxComponent {

  quotes = [
    'Keep learning every day.',
    'Practice makes progress.',
    'Never stop improving.',
    'Believe in yourself.',
    'Small steps lead to big results.'
  ];

  currentQuote = signal(this.quotes[0])

  getNewQuote() {
    let newQuote: string;

    do {
      const randomIndex = Math.floor(Math.random() * this.quotes.length);
      newQuote = this.quotes[randomIndex];
    } while (newQuote === this.currentQuote());

    this.currentQuote.set(newQuote);
  }
}
