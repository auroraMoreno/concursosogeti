import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AppComponent} from './app.component';
import {LoginComponent} from './../app/components/login/login.component';

const appRoutes: Routes = [
    {path:"", component:AppComponent},
    {path:"login", component:LoginComponent}
];
export const appRoutingProviders : any[] = [];
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);