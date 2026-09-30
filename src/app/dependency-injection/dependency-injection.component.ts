import { Component } from '@angular/core';
import { BankAccountComponent } from './bank-account/bank-account.component';

@Component({
  imports: [BankAccountComponent],
  selector: 'app-dependency-injection',
  styleUrl: './dependency-injection.component.css',
  templateUrl: './dependency-injection.component.html',
})
export class DependencyInjectionComponent {
  private balance = 1000;

  getBalance(){
    return this.balance
  }

}
