import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-progress-bar',
  styleUrl: './progress-bar.component.css',
  templateUrl: './progress-bar.component.html',
})
export class ProgressBarComponent implements OnChanges {
  @Input() percent = 0;
  clampedPercent = 0;

  ngOnChanges(changes: SimpleChanges): void {
      this.clampedPercent = Math.min(
        100,
        Math.max(0, this.percent)
      )
  }
}
