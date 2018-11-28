import { Injectable } from '@angular/core';
import { Poney } from '../interfaces/poney';
import { Race } from '../interfaces/race';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RacingServiceService {

  API_URL:string = "http://localhost:3000";

  constructor(private http: HttpClient) { 
  }

  get ponies():Observable<Poney[]>{
    return this.http.get(`${this.API_URL}/ponies`)
    .pipe(map(ponies => <Poney[]>ponies))
  }

  get race():Observable<Race[]>{
    return this.http.get(`${this.API_URL}/races`)
    .pipe(map(races => <Race[]>races))
  }

  getRaceById(id:number):Observable<Race>{
    return this.race
    .pipe(map(races=>races.find(race=>race.id == id)));
  }  

  createRace(race:Race){
    return this.http.post(`${this.API_URL}/races`, race);
  }
}
