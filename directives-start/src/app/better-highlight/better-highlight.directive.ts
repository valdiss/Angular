import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  constructor( ) {  }

  ngOnInit(){
  }

  @HostBinding('style.backgroundColor') backgroundColor :string = 'transparent';

  @HostListener('mouseenter') mouseover(eventData:Event){
    this.backgroundColor = 'purple';
  }

  @HostListener('click') click(eventData:Event){
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    this.backgroundColor = 'transparent';
  }

}
