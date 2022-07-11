import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//componentes
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-datail.component';

//Imports
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,

  ],

  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
