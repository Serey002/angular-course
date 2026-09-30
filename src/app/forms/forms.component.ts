import { Component } from '@angular/core';
import { FormsControlComponent } from './forms-control/forms-control.component';
import { FormsGroupComponent } from './forms-group/forms-group.component';
import { FormsBuilderComponent } from './forms-builder/forms-builder.component';
import { FormsArrayComponent } from './forms-array/forms-array.component';
import { FormValidationComponent } from './form-validation/form-validation.component';

@Component({
  imports: [FormsControlComponent, FormsGroupComponent, FormsBuilderComponent, FormsArrayComponent, FormValidationComponent],
  selector: 'app-forms',
  styleUrl: './forms.component.css',
  templateUrl: './forms.component.html',
})
export class FormsComponent {

}
