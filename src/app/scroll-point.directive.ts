import { DOCUMENT } from '@angular/platform-browser';
import { Directive, HostListener, Input, Inject, Renderer, ElementRef} from '@angular/core';

@Directive({
  selector: '[appScrollPoint]'
})
export class ScrollPointDirective {
  @Input() appScrollPoint: number;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer,
    private el: ElementRef
  ) { }

  @HostListener('window:scroll', [])
   onWindowScroll() {
      const windowScroll = this.document.body.scrollTop;
      if (windowScroll > this.appScrollPoint) {
        //add class to the native element
        this.renderer.setElementClass(this.el.nativeElement, 'hidden', false);
        this.renderer.setElementClass(this.el.nativeElement, 'fadeOutLeft', false);
        this.renderer.setElementClass(this.el.nativeElement, 'fadeInLeft', true);
      } else {
        //remove class from native element
        this.renderer.setElementClass(this.el.nativeElement, 'fadeOutLeft', true);
        // this.renderer.setElementClass(this.el.nativeElement, 'hidden', true);
        this.renderer.setElementClass(this.el.nativeElement, 'fadeInLeft', false);
      }

   }
}
