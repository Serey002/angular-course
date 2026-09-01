import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  imports: [DatePipe],
  selector: 'app-clock-display',
  styleUrl: './clock-display.component.css',
  templateUrl: './clock-display.component.html',
})
export class ClockDisplayComponent implements OnInit, OnDestroy {
  currentTime = signal(new Date());

  intervalId: ReturnType<typeof setInterval> | undefined ;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentTime.set(new Date());
    }, 2000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  }


}
