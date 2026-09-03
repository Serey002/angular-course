import { Component, OnDestroy } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-ng-on-destroy',
  styleUrl: './ng-on-destroy.component.css',
  templateUrl: './ng-on-destroy.component.html',
})
export class NgOnDestroyComponent implements OnDestroy {
  ngOnDestroy(): void {
      console.log("")
  }
}
