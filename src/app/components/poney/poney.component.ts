import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Poney } from 'src/app/interfaces/poney';

@Component({
  selector: 'fag-poney',
  templateUrl: './poney.component.html',
  styleUrls: ['./poney.component.scss']
})
export class PoneyComponent implements OnInit {

  @Input('poney') poney: Poney;
  @Output() win: EventEmitter<Poney> = new EventEmitter();  
  @ViewChild('poneyImg') poneyImg;
  winState :boolean = false;
  
  private _intervalId: any;

  constructor(private element: ElementRef) {}
    

  ngOnInit() {
    this.run();
  }

  handleClick(){
    this.win.emit(this.poney);
  }

  run(){
    this.poney.distance = 0;

    this._intervalId = setInterval(() => {
      this.poney.distance += Math.floor(Math.random() *10)+1;
      if(this.poney.distance >=85){
        this.win.emit(this.poney);
        this.poney.distance=85;
        this.stopRunning();
      }
    }, 1000)
  }

  stopRunning(){
    clearInterval(this._intervalId);
    this.poney.img = "assets/bloodsplat.gif";
    setTimeout(()=>{
      this.poney.img = "assets/grinder.gif";
      this.element.nativeElement.querySelector('img').style.width= "150px";
    },500)
  }

  ngOnDestroy(){
    clearInterval(this._intervalId);
    this.poney.img = this.poney.baseImg;
  }
}
