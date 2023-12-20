import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component'; 
import { ReservationComponent } from './reservation/reservation.component';
import { TeamComponent } from './team/team.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'service', component: ServicesComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'team', component: TeamComponent },
  { path: 'contacts', component: ContactsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
