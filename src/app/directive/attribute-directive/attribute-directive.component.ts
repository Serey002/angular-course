import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';
import { BgClass } from './bg-class';
import { BgColor } from './bg-color';
import { FormsModule } from '@angular/forms';


@Component({
  imports: [NgClass, NgStyle, BgClass, BgColor, FormsModule],
  selector: 'app-attribute-directive',
  styleUrl: './attribute-directive.component.css',
  templateUrl: './attribute-directive.component.html',
})
export class AttributeDirectiveComponent {

  colorClassName = signal<string>("")
  isColoeGreen: boolean = false

  setBgClass(className: string) {
    this.colorClassName.set(className)
  }

  toggleColor() {
    this.isColoeGreen = !this.isColoeGreen
  }


  accountNumber = '';


}
