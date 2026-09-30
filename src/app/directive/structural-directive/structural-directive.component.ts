import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-structural-directive',
  styleUrl: './structural-directive.component.css',
  templateUrl: './structural-directive.component.html',
})
export class StructuralDirectiveComponent {

  isLoggedIN = true
  accountStatus = "ACTIVE"


  accounts: any = [
      {
          accountNumber: 'ACC001',
          balance: 500,
          status: 'ACTIVE'
      },
      {
          accountNumber: 'ACC002',
          balance: 0,
          status: 'BLOCKED'
      },
      {
          accountNumber: 'ACC003',
          balance: 200,
          status: 'ACTIVE'
      }
  ];
}
