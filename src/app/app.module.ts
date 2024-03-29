import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { GoogleMapsModule } from '@angular/google-maps'; /* Google-maps api */
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; /* formularios */
import { DragDropModule } from '@angular/cdk/drag-drop'; /* drag and drop */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IconoComponent } from './icono/icono.component';
import { BannerComponent } from './banner/banner.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { MapComponent } from './acercade/map/map.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { CardxpComponent } from './experiencia/cardxp/cardxp.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { CardstComponent } from './estudios/cardst/cardst.component';
import { SkillsComponent } from './skills/skills.component';
import { ProgressbarComponent } from './skills/progressbar/progressbar.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ProyectcardComponent } from './proyectos/proyectcard/proyectcard.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { IconManagerComponent } from './header/icon-manager/icon-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IconoComponent,
    BannerComponent,
    AcercadeComponent,
    MapComponent,
    ExperienciaComponent,
    CardxpComponent,
    EstudiosComponent,
    CardstComponent,
    SkillsComponent,
    ProgressbarComponent,
    ProyectosComponent,
    ProyectcardComponent,
    FooterComponent,
    LoginComponent,
    IconManagerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule, /* goole-maps api */
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
