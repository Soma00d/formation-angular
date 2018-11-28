import { Component, OnInit, Input } from '@angular/core';
import { Poney } from 'src/app/interfaces/poney';
import { Race } from 'src/app/interfaces/race';
import { FilterPoniesPipe } from 'src/app/pipes/filter-ponies.pipe';
import { RacingServiceService } from 'src/app/services/racing-service.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'fag-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  race:Race;
  ponies$: Observable<Poney[]>;
    
  constructor(
    private poniesServ:RacingServiceService,
    private route:ActivatedRoute) {   
  }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.poniesServ.getRaceById(parseInt(params.id)).subscribe(race => {
        this.race = race;
        this.ponies$ = this.poniesServ.ponies;   
      })
    })
  }
  
  handleWin(ponneyWin:Poney){
    console.log("winner "+ponneyWin.name)
  }



}
