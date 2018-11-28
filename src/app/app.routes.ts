import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateRaceComponent } from './components/create-race/create-race.component';
import { RaceComponent } from './components/race/race.component';

export const routes:Routes = [
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'create-race',
        component:CreateRaceComponent
    },
    {
        path:'race/:id',
        component:RaceComponent
    },
    {
        path:'**',
        redirectTo:'home'
    }
]
