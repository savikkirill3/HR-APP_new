import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material/material.module';
import { CustomFormsModule } from 'ng2-validation';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CandidateComponent } from './pages/candidate/candidate.component';
import { VacancyComponent } from './pages/vacancy/vacancy.component';
import { InterviewComponent } from './pages/interview/interview.component';
import { CandidatePageComponent } from './pages/candidate/candidate-page/candidate-page.component';
import { HeaderComponent } from './layout/header/header.component';
import { MatSelectModule } from '@angular/material';

import { ShortInfoComponent } from './pages/candidate/candidate-page/short-info/short-info.component';

import { TimelineComponent } from './pages/candidate/candidate-page/timeline/timeline.component';
import {HttpClientModule} from '@angular/common/http';
import { NewNotesDialogComponent } from './pages/candidate/candidate-page/timeline/new-notes-dialog/new-notes-dialog.component';
import { NewExperienceDialogComponent } from './pages/candidate/candidate-page/timeline/new-experience-dialog/new-experience-dialog.component';
import {NewCvDialogComponent} from './pages/candidate/candidate-page/timeline/new-cv-dialog/new-cv-dialog.component';
import { VacancyPageComponent } from './pages/vacancy/vacancy-page/vacancy-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidatePageComponent,
    CandidateComponent,
    VacancyComponent,
    InterviewComponent,
    HeaderComponent,

    ShortInfoComponent,

    TimelineComponent,
    NewNotesDialogComponent,
    NewExperienceDialogComponent,
    NewCvDialogComponent,
    VacancyPageComponent

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    NewExperienceDialogComponent,
    NewNotesDialogComponent,
    NewCvDialogComponent,
  ]
})

export class AppModule {

}
