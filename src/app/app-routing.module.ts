import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Components*/
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { ConnectComponent } from './components/connect/connect.component';
import { CareerComponent } from './components/career/career.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '', title: 'Vyomn Projects', component: LayoutComponent, children: [
      { path: 'home', title: 'Vyomn Projects - Home', component: HomeComponent },
      { path: 'connect', component: ConnectComponent },
      { path: 'career', title: 'Vyomn Projects - Career', component: CareerComponent },
      { path: 'about', title: 'Vyomn Projects - Career', component: AboutComponent }, 
    ]
  },
 
  { path: '**', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Restores scroll position on navigation
      anchorScrolling: 'enabled',          // Automatically scrolls to fragments
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
