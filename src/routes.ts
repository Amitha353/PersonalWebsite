import { Routes } from '@angular/router';
import { ContactComponent } from './app/contact/contact.component';
import { EducationComponent } from './app/education/education.component';
import { MachinelearningComponent } from './app/machinelearning/machinelearning.component';
import { PortfolioComponent } from './app/portfolio/portfolio.component';
import { ProfessionalComponent } from './app/professional/professional.component';
import { PublicationsComponent } from './app/publications/publications.component';
import { SelfinformationComponent } from './app/selfinformation/selfinformation.component';

export const appRoutes: Routes = [
    { path: 'aboutme', component: SelfinformationComponent },
    { path: 'education', component: EducationComponent },
    { path: 'publications', component: PublicationsComponent },
    { path: 'professional', component: ProfessionalComponent },
    { path: 'resume', component: PortfolioComponent },
    { path: 'machinelearning', component: MachinelearningComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: '/aboutme', pathMatch: 'full' }
]