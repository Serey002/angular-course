import { Component, TemplateRef, viewChild, ViewChild, ViewContainerRef } from '@angular/core';
import { TemplatesComponent } from "./templates/templates.component";
@Component({
  selector: 'app-root',
  imports: [TemplatesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
