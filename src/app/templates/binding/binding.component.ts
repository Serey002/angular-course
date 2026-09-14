import { Component, signal } from '@angular/core';
import { PropertyBindingComponent } from "./property-binding/property-binding.component";
import { AttributeBindingComponent } from "./attribute-binding/attribute-binding.component";
import { ClassBindingComponent } from "./class-binding/class-binding.component";
import { EventBindingComponent } from "./event-binding/event-binding.component";
import { TwoWayBindingComponent } from "./two-way-binding/two-way-binding.component";

@Component({
  imports: [PropertyBindingComponent, AttributeBindingComponent, ClassBindingComponent, EventBindingComponent, TwoWayBindingComponent],
  selector: 'app-binding',
  styleUrl: './binding.component.css',
  templateUrl: './binding.component.html',
})
export class BindingComponent {

}
