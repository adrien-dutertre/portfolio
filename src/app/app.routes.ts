import { Routes } from '@angular/router';
import { AproposComponent } from './pages/apropos/apropos.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';
import { ProjetsComponent } from './pages/projets/projets.component';
import { LiensComponent } from './pages/liens/liens.component';
import { FormationComponent } from './pages/formation/formation.component';

export const routes: Routes = [
  { path: 'apropos', component: AproposComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'projets', component: ProjetsComponent },
  { path: 'formation', component: FormationComponent },
  { path: 'liens', component: LiensComponent },
  { path: '', redirectTo: 'apropos', pathMatch: 'full' },
];
