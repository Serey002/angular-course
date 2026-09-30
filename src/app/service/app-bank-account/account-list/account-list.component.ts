import { Component, inject } from '@angular/core';
import { AccountService } from '../account-service';
import { AccountDetailComponent } from '../account-detail/account-detail.component';

@Component({
  imports: [AccountDetailComponent],
  // providers:[AccountService],
  selector: 'app-account-list',
  styleUrl: './account-list.component.css',
  templateUrl: './account-list.component.html',
})
export class AccountListComponent {
  accountService = inject(AccountService)

  accounts = this.accountService.getAccounts()

  selectedAccount?: any;

  viewDetail(accountNumber: string) {
    this.selectedAccount = this.accountService.getAccount(accountNumber)
  }

}
