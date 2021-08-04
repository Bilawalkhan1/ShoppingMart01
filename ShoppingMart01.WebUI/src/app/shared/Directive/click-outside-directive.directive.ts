import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[ClickOutside]'
})
export class ClickOutsideDirectiveDirective {
  constructor(private _elementRef : ElementRef) {
  }

  @Output()
  public clickOutside = new EventEmitter();

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
  }
}
