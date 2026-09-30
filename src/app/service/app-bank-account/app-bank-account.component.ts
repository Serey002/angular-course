import { Component } from '@angular/core';
import { AccountListComponent } from './account-list/account-list.component';

@Component({
  imports: [AccountListComponent],
  selector: 'app-app-bank-account',
  styleUrl: './app-bank-account.component.css',
  templateUrl: './app-bank-account.component.html',
})
export class AppBankAccountComponent {}
