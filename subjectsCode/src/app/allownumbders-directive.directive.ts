import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appAllownumbdersDirective]'
})
export class AllownumbdersDirectiveDirective {

  constructor() { }
@HostListener('keydown', ['$event'])
onKeyDown(event:KeyboardEvent){
  var allowed = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'];

var numbers = /^[0-9]$/.test(event.key);
var allowedKeys= allowed.includes(event.key);
  if(!numbers && !allowedKeys){
    event.preventDefault();
  }

}
}
