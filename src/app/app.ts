import { Component, TemplateRef, viewChild, ViewChild, ViewContainerRef } from '@angular/core';
import { TemplatesComponent } from "./templates/templates.component";
import { DirectiveComponent } from './directive/directive.component';
import { RoutingComponent } from './routing/routing.component';
import { RouterOutlet } from '@angular/router';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { ServiceComponent } from './service/service.component';
import { FormsComponent } from './forms/forms.component';
@Component({
  selector: 'app-root',
  imports: [TemplatesComponent, DirectiveComponent, ServiceComponent, DependencyInjectionComponent, RouterOutlet, RoutingComponent, FormsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
