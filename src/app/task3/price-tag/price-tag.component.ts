import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-price-tag',
  styleUrl: './price-tag.component.css',
  templateUrl: './price-tag.component.html',
})
export class PriceTagComponent {
  @Input() price!: number;
  @Input() currency!: string;
}
