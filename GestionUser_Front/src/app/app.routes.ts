import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccueilComponent } from './accueil/accueil.component';

export const routes: Routes = [

    {path : "home" , component : HomeComponent},
    {path : "acceuil" , component : AccueilComponent},
    {path : "" , redirectTo:"acceuil" , pathMatch :  'full'}
    
];
