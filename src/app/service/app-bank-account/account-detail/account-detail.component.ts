import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-account-detail',
  styleUrl: './account-detail.component.css',
  templateUrl: './account-detail.component.html',
})
export class AccountDetailComponent {

  @Input() account?: any;

}
