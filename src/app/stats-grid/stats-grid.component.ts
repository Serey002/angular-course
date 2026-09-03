import { Component } from '@angular/core';
import { StatCardComponent } from '../stat-card/stat-card.component';

@Component({
  imports: [StatCardComponent],
  selector: 'app-stats-grid',
  styleUrl: './stats-grid.component.css',
  templateUrl: './stats-grid.component.html',
})
export class StatsGridComponent {}
