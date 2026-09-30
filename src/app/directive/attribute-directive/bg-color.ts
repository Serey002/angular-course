import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appBgColor]',
})
export class BgColor implements OnChanges {

  @Input() appBgColor = '';

  constructor(private elementRef: ElementRef) {}

  ngOnChanges() {
    this.elementRef.nativeElement.style.backgroundColor = this.appBgColor;
  }
}
