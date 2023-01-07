import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appDhighlight]'
})
export class DhighlightDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
    this.el.nativeElement.style.color = 'red';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('white');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('yellow');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
