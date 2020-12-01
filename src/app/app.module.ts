import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {routing, appRoutingProviders} from './app.routing';
import { AppComponent } from './app.component';
import {LoginComponent} from './components/login/login.component';
import { BuscadorusersComponent } from './components/buscadorusers/buscadorusers.component';
import { FilterPipe } from './pipes/filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import { DetallesComponent } from './components/detalles/detalles.component';
import { CookieService } from "ngx-cookie-service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BuscadorusersComponent,
    FilterPipe,
    DetallesComponent
  ],
  imports: [
    BrowserModule, routing, FormsModule, HttpClientModule, BrowserAnimationsModule, MatDialogModule
  ],
  providers: [appRoutingProviders,CookieService],
  bootstrap: [AppComponent],
  entryComponents:[DetallesComponent]

})
export class AppModule { }
