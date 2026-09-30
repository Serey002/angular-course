import { Component, inject } from '@angular/core';
import { AccountService } from '../account-service';
import { AccountService2 } from '../account-service2';

@Component({
  standalone: true,
  providers: [AccountService2],
  selector: 'app-bank-account',
  styleUrl: './bank-account.component.css',
  templateUrl: './bank-account.component.html',
})
export class BankAccountComponent {
  balance = inject(AccountService)
  balance2 = inject(AccountService2)
}
