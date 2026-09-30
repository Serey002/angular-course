import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-account-detial',
  styleUrl: './account-detial.component.css',
  templateUrl: './account-detial.component.html',
})
export class AccountDetialComponent {

  private route = inject(ActivatedRoute)

  accountNumber = this.route.snapshot.paramMap.get('accountNumber')
}
