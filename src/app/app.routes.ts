import { Routes } from '@angular/router';
import { HomePageComponent } from './routing/home-page/home-page.component';
import { AboutPageComponent } from './routing/about-page/about-page.component';
import { ContactPageComponent } from './routing/contact-page/contact-page.component';
import { NotFoundPageComponent } from './routing/not-found-page/not-found-page.component';
import { DirectiveComponent } from './directive/directive.component';
import { LoginPageComponent } from './routing/login-page/login-page.component';
import { AccountDetialComponent } from './routing/account-detial/account-detial.component';
import { AccountListComponent } from './service/app-bank-account/account-list/account-list.component';
import { AccountDetailComponent } from './service/app-bank-account/account-detail/account-detail.component';

export const routes: Routes = [
  // {
  //   path: '', redirectTo: 'home', pathMatch: 'full' // Defualt route
  // },
  // {
  //   path: 'home', component: HomePageComponent
  // },
  // {
  //   path: 'about', component: AboutPageComponent
  // },
  // {
  //   path: 'contact', component: ContactPageComponent
  // },
  {
    path: 'directive', component: DirectiveComponent
  },
  // {
  //   path: 'login', component: LoginPageComponent
  // },
  // {
  //   path: 'accounts/:accountNumber', component: AccountDetialComponent
  // },
  // {
  //   path: 'account', component: AccountDetialComponent
  // },
  {
    path: 'accounts', component: AccountListComponent
  },
  {
    path: '', redirectTo: 'accounts', pathMatch: 'full'
  },
  {
    path: 'accounts/:accountNumber', component: AccountDetailComponent
  },
  {
    path: '**', component: NotFoundPageComponent
  }
];
