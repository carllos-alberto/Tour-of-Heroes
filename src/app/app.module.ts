import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//Imports
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';                        // Módulo para rodar o servidor

//Rotas
import { AppRoutingModule } from './app-routing.module';


//componentes
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';



@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    //@angular
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,

    //app
    AppRoutingModule,
    CoreModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
