import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appBgClass]',
})
export class BgClass implements OnChanges {

  @Input() appBgClass = '';

  constructor(private elementRef: ElementRef) {}

  ngOnChanges() {
    this.elementRef.nativeElement.className = this.appBgClass;
  }
}
