import { Component, OnInit } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-ng-on-init',
  styleUrl: './ng-on-init.component.css',
  templateUrl: './ng-on-init.component.html',
})
export class NgOnInitComponent implements OnInit {


  ngOnInit(): void {
    console.log('ngOnInit initialized');
  }

}
