import { Component } from '@angular/core';
import { InterpolationComponent } from "./interpolation/interpolation.component";
import { BindingComponent } from "./binding/binding.component";
import { PipesComponent } from "./pipes/pipes.component";
import { TemplateVariablesComponent } from "./template-variables/template-variables.component";

@Component({
  imports: [InterpolationComponent, BindingComponent, PipesComponent, TemplateVariablesComponent],
  selector: 'app-templates',
  styleUrl: './templates.component.css',
  templateUrl: './templates.component.html',
})
export class TemplatesComponent {}
