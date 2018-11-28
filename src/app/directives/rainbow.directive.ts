import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { Poney } from '../interfaces/poney';

@Directive({
  selector: '[fagRainbow]'
})
export class RainbowDirective {

  @Input() poney : Poney;
  @Input() index:number;

  constructor(private element:ElementRef) {}

   ngOnInit(){
      this.element.nativeElement.style.color = this.poney.color; //reference au selecteur fag-poney
   }


   @HostListener('dblclick') handleDblClick(){
     this.poney.img = "assets/bloodsplat.gif";
     setTimeout(()=>{this.element.nativeElement.style.display = "none"},500)
     
   }
}
