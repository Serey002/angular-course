import { Component, Input, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-home-page',
  styleUrl: './home-page.component.css',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  accounts = [
  {
    accountNumber: '10001',
    balance: 500
  },
  {
    accountNumber: '10002',
    balance: 800
  },
  {
    accountNumber: '10003',
    balance: 300
  }
];
}
