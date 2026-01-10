import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },   
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    {path: 'solutions', component: SolutionsComponent },
    { path: 'connexion', component: ConnexionComponent }

]