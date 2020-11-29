import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {routing, appRoutingProviders} from './app.routing';
import { AppComponent } from './app.component';
import {LoginComponent} from './components/login/login.component';
import { BuscadorusersComponent } from './components/buscadorusers/buscadorusers.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BuscadorusersComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule, routing, FormsModule, HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
