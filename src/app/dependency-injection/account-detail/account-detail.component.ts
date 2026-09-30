import { Component, inject } from '@angular/core';
import { AccountService } from '../account-service';

@Component({
  imports: [],
  selector: 'app-account-detail',
  styleUrl: './account-detail.component.css',
  templateUrl: './account-detail.component.html',
})
export class AccountDetailComponent {

  accountService = inject(AccountService)
}
