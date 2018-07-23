import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDropbox]'
})
export class DropboxDirective {

  @Output()
  // valueChange = new EventEmitter();
  valueChange:EventEmitter<number> = new EventEmitter<number>();

  counter:number = 0;

  constructor() { }

  /* @HostListener('click') onClick() {
    window.alert('Host Element Clicked');
  } */

  @HostListener('click')
   clickMe() {
    this.counter = this.counter + 1;
    this.valueChange.emit(this.counter);
  }

}
