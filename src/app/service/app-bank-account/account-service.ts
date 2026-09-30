import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accounts = [
    {
      "accountNumber": "000001",
      "customerName": "Phem Serey",
      "accountType": "SAVINGS",
      "balance": 1500.00,
      "currency": "USD",
      "status": "ACTIVE",
      "createdAt": "2026-09-20T09:30:00",
      "branch": "Phnom Penh Main Branch"
    },
    {
      "accountNumber": "000002",
      "customerName": "Dara Sok",
      "accountType": "CHECKING",
      "balance": 850.50,
      "currency": "USD",
      "status": "ACTIVE",
      "createdAt": "2026-09-18T14:15:00",
      "branch": "Siem Reap Branch"
    },
    {
      "accountNumber": "000003",
      "customerName": "Sokha Chan",
      "accountType": "SAVINGS",
      "balance": 3200.75,
      "currency": "USD",
      "status": "BLOCKED",
      "createdAt": "2026-08-25T10:00:00",
      "branch": "Phnom Penh Main Branch"
    }
  ]

  getAccounts() {
    return this.accounts
  }

  getAccount(accountNumber: string) {
    return this.accounts.find(
      account => account.accountNumber === accountNumber
    )
  }

}
