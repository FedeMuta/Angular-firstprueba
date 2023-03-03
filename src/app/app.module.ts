import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps'; /* Google-maps api */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IconoComponent } from './icono/icono.component';
import { BannerComponent } from './banner/banner.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { MapComponent } from './acercade/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IconoComponent,
    BannerComponent,
    AcercadeComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule /* goole-maps api */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
