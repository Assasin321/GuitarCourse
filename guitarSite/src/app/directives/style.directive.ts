import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})

export class StyleDirective{

  @Input('appStyle') color = 'white';
  constructor(private el: ElementRef , private r: Renderer2) {
    this.r.setStyle(this.el.nativeElement, 'backgroundColor', '#252525');
    this.r.setStyle(this.el.nativeElement, 'color', this.color);
    this.r.setStyle(this.el.nativeElement, 'height', '600px');
    this.r.setStyle(this.el.nativeElement, 'margin-bottom', '5px');
    this.r.setStyle(this.el.nativeElement, 'font-size', '25px');
  }
  @HostListener('mouseenter') onEnter(): void {
    this.r.setStyle(this.el.nativeElement, 'color', '#F14635');
  }

  @HostListener('mouseleave') onLeave(): void{
      this.r.setStyle(this.el.nativeElement, 'color', this.color);
  }

}
