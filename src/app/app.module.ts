import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';  
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { EducationComponent } from './education/education.component';
import { SelfinformationComponent } from './selfinformation/selfinformation.component';
import { NavComponent } from './nav/nav.component';
import { PublicationsComponent } from './publications/publications.component';
import { ProfessionalComponent } from './professional/professional.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MachinelearningComponent } from './machinelearning/machinelearning.component';
import { ContactComponent } from './contact/contact.component';
import { CommonComponent } from './common/common.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    SelfinformationComponent,
    NavComponent,
    PublicationsComponent,
    ProfessionalComponent,
    PortfolioComponent,
    MachinelearningComponent,
    ContactComponent,
    CommonComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    PdfViewerModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [PdfViewerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
