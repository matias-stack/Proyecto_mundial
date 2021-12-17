import { RouterModule, Routes } from '@angular/router';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { BlankComponent } from './blank/blank.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErroNComponent } from './erro-n/erro-n.component';
import { FontawesomeComponent } from './fontawesome/fontawesome.component';
import { MapGoogleComponent } from './map-google/map-google.component';
import { ProfileComponent } from './profile/profile.component';
import { ResultsComponent } from './results/results.component';


const APP_ROUTES: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'map-google', component: MapGoogleComponent},
  {path: 'basic-table', component: BasicTableComponent},
  {path: 'blank', component: BlankComponent},
  {path: 'erro-n', component: ErroNComponent},
  {path: 'fontawesome', component: FontawesomeComponent},
  {path: 'results', component: ResultsComponent},
  {path: '**', pathMatch:'full', redirectTo: 'erro-n' }     
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);  //tambien puede ser APP_ROUTING
