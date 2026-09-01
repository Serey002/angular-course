import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-ng-on-changes',
  styleUrl: './ng-on-changes.component.css',
  templateUrl: './ng-on-changes.component.html',
})
export class NgOnChangesComponent implements OnChanges {
  @Input() foodName = '';

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log('Food Name:', this.foodName);
    console.log('Previous Value:', changes['foodName'].previousValue);
    console.log('Current Value:', changes['foodName'].currentValue);
  }
}
