import { Component, OnInit } from '@angular/core';
import { Race } from 'src/app/interfaces/race';
import { RacingServiceService } from 'src/app/services/racing-service.service';

@Component({
  selector: 'fag-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'the Poney HELL';
  race:Race[]
  
  constructor(private _raceServ:RacingServiceService){

  }

  ngOnInit(){
   this._raceServ.race.subscribe((races:Race[]) => {
    this.race =  races;
   })
  }

}
