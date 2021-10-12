import { MatProgressBar } from '@angular/material/progress-bar';
import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

export const DashboardRoutes: Routes = [
  {
  path: '',
  component: DashboardComponent
},
{
path:'progress',
component:MatProgressBar
} 

];
