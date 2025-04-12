import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { ConnectComponent } from './components/connect/connect.component'

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '', title: 'Vyomn Projects', component: LayoutComponent, children: [
      { path: 'home', title: 'Vyomn Projects - Home', component: HomeComponent },
      { path: 'connect', component: ConnectComponent },


     
    ]
  },

  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
