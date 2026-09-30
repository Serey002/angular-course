import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-contact-page',
  styleUrl: './contact-page.component.css',
  templateUrl: './contact-page.component.html',
})
export class ContactPageComponent {

  constructor(private router: Router){}
  navigetToHome() {
    this.router.navigateByUrl("/home")
  }

}
