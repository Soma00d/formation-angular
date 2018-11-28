import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { Observable } from 'rxjs';
import { Poney } from 'src/app/interfaces/poney';
import { RacingServiceService } from 'src/app/services/racing-service.service';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { map, first } from 'rxjs/operators'
import { Race } from 'src/app/interfaces/race';

@Component({
  selector: 'fag-create-race',
  templateUrl: './create-race.component.html',
  styleUrls: ['./create-race.component.scss']
})
export class CreateRaceComponent implements OnInit {

  ponies$: Observable<Poney[]>;
  raceForm:FormGroup;

  constructor(
    private location:Location,
    private poniesServ:RacingServiceService
  ) { }

  ngOnInit() {
    //setTimeout( this.goBack.bind(this), 3000)
    this.ponies$ = this.poniesServ.ponies;   

    this.raceForm = new FormGroup({
      name: new FormControl('', [Validators.required, this.upperCaseFirstLetter(2)], [this.nameTaken.bind(this)]), 
      poneyIds: new FormControl([], [Validators.minLength(2), Validators.required])
    })
  }

  upperCaseFirstLetter(minVal:number){
    return (control:FormControl)=>{
      if(control.value.length>=minVal){
        return undefined;
      }
      return{
        upperCaseFirstLetter : true
      }
    }
  }

  nameTaken(control: FormControl): Observable<ValidationErrors | undefined>{
   return this.poniesServ.race.pipe(first()).pipe(map(races=>{
     return races.find(race=>race.name === control.value) ? {nameTaken: true} : undefined
   }))
  }

  goBack(){
    this.location.back();
  }

  handleSubmit(){
    this.poniesServ.createRace({
      img:"assets/boucherie.jpg",
      ...this.raceForm.value
    }).subscribe(()=>{return this.goBack()});
  }

  
}
