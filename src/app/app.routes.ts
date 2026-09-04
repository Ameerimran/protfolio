import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Portfolio } from './portfolio/portfolio';
import { Resume } from './resume/resume';
import { Contact } from './contact/contact';
import { ProjectCard } from './project-card/project-card';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'portfolio', component: Portfolio },
  { path: 'resume', component: Resume },
  { path: 'contact', component: Contact },
  { path: 'project-card', component: ProjectCard },
  { path: '**', redirectTo: 'home' },
];
