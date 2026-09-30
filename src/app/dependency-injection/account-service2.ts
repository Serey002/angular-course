import { Service } from '@angular/core';

@Service()
export class AccountService2 {

  private balance = 1000;

  getBalance(){
    return this.balance
  }
}
