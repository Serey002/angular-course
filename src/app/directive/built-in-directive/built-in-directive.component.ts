import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  imports: [NgClass, NgStyle, FormsModule],
  selector: 'app-built-in-directive',
  styleUrl: './built-in-directive.component.css',
  templateUrl: './built-in-directive.component.html',
})
export class BuiltInDirectiveComponent {
  accountStatus = "ACTIVE";
  accountStatus2 = "BLOCKED";
  colorClass = "bg-green-500 text-white"
  backgroundColor = "green"
  accountNumber = ""

  balance = 500.0;


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
