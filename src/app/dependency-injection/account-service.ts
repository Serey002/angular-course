import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private balance = 1000;

  getBalance(){
    return this.balance
  }

  deposit(amount: number) {
    this.balance += amount
  }

}
