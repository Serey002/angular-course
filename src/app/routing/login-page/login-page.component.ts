import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-login-page',
  styleUrl: './login-page.component.css',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {


  @Input() showLogin!: boolean;

  private router = inject(Router)
  navigetToContact() {
    this.router.navigate(['/home'])
  }
}
