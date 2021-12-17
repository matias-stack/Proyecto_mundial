import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import {APP_ROUTING } from './app.routes';

//Servicio
import {DashboardService } from './servicios/dashboard.service';
import {BasicTableService } from './servicios/basic-table.service';

//Componentes
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { MapGoogleComponent } from './map-google/map-google.component';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { BlankComponent } from './blank/blank.component';
import { ErroNComponent } from './erro-n/erro-n.component';
import { FontawesomeComponent } from './fontawesome/fontawesome.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    MapGoogleComponent,
    BasicTableComponent,
    BlankComponent,
    ErroNComponent,
    FontawesomeComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    DashboardService,
    BasicTableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
