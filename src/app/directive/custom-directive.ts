import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
})
export class CustomDirective {

  @Input() appAccountStatus = '';

  constructor(private elementRef: ElementRef) {}

  ngOnChanges() {
    if (this.appAccountStatus === 'ACTIVE') {
      this.elementRef.nativeElement.style.backgroundColor = 'green';
      this.elementRef.nativeElement.style.color = 'white';
    }

    if (this.appAccountStatus === 'BLOCKED') {
      this.elementRef.nativeElement.style.backgroundColor = 'red';
      this.elementRef.nativeElement.style.color = 'white';
    }

    if (this.appAccountStatus === 'CLOSED') {
      this.elementRef.nativeElement.style.backgroundColor = 'gray';
      this.elementRef.nativeElement.style.color = 'white';
    }

  }
}
