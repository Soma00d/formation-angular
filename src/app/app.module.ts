import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PoneyComponent } from './components/poney/poney.component';
import { RaceComponent } from './components/race/race.component';
import { RainbowDirective } from './directives/rainbow.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './modules/material/material.module';
import { PercentPipe } from './pipes/percent.pipe';
import { FilterPoniesPipe } from './pipes/filter-ponies.pipe';
import { HomeComponent } from './components/home/home.component';
import { CreateRaceComponent } from './components/create-race/create-race.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PoneyComponent,
    RaceComponent,
    RainbowDirective,
    PercentPipe,
    FilterPoniesPipe,
    HomeComponent,
    CreateRaceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    FilterPoniesPipe
  ],
  providers: [
    FilterPoniesPipe
  ],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
