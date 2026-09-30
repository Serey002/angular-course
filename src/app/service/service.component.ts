import { Component } from '@angular/core';
import { AppBankAccountComponent } from './app-bank-account/app-bank-account.component';

@Component({
  imports: [AppBankAccountComponent],
  selector: 'app-service',
  styleUrl: './service.component.css',
  templateUrl: './service.component.html',
})
export class ServiceComponent {}
