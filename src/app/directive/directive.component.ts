import { Component } from '@angular/core';
import { BuiltInDirectiveComponent } from './built-in-directive/built-in-directive.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { CustomDirective } from './custom-directive';

@Component({
  imports: [BuiltInDirectiveComponent, AttributeDirectiveComponent, StructuralDirectiveComponent, CustomDirective],
  selector: 'app-directive',
  styleUrl: './directive.component.css',
  templateUrl: './directive.component.html',
})
export class DirectiveComponent {

  accounts= [
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
