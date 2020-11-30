import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './../app/components/login/login.component';
import { BuscadorusersComponent } from './components/buscadorusers/buscadorusers.component';
import { DetallesComponent } from './components/detalles/detalles.component';

const appRoutes: Routes = [
    {path:"login", component:LoginComponent},
    {path:"buscador",component:BuscadorusersComponent},
];
export const appRoutingProviders : any[] = [];
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);