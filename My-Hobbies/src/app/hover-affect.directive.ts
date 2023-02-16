
import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

@Input('hoverAffect') hoverAffect: string="";
@Input('isfirst') IsFirst: boolean=false;
@Input('islast') IsLast: boolean=false;
orignalBorder:string='';
  constructor(private Element:ElementRef) { 
    this.orignalBorder=this.Element.nativeElement.style.border='';
    
  }
  @HostListener('mouseenter') onMouseEnter(){
    debugger
    if (this.hoverAffect === 'underline') {
      this.Element.nativeElement.style.textDecoration = 'underline';
    } else if (this.hoverAffect === 'bold') {
      this.Element.nativeElement.style.fontWeight = 'bold';
    }
    else if (this.IsFirst || this.IsLast)
    this.Element.nativeElement.style.border = '2px solid green';
    }
      @HostListener('mouseleave') onMouseLeave(){
        if (this.hoverAffect === 'underline') {
          this.Element.nativeElement.style.textDecoration = 'none';
        } else if (this.hoverAffect === 'bold') {
          this.Element.nativeElement.style.fontWeight = 'normal';
        }
        else if (this.IsFirst || this.IsLast)
        {
        this.Element.nativeElement.style.border = this.orignalBorder;
        }
    }
}
