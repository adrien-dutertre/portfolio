import { Routes } from '@angular/router';
import { AproposComponent } from './apropos/apropos.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ProjetsComponent } from './projets/projets.component';
import { LiensComponent } from './liens/liens.component';

export const routes: Routes = [
  { path: '', redirectTo: '/apropos', pathMatch: 'full' },
  { path: 'apropos', component: AproposComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'projets', component: ProjetsComponent },
  { path: 'liens', component: LiensComponent }
];
