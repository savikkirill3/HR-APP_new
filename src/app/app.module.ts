import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material/material.module';
import { CustomFormsModule } from 'ng2-validation';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CandidateComponent } from './pages/candidate/candidate.component';
import { VacancyComponent } from './pages/vacancy/vacancy.component';
import { InterviewComponent } from './pages/interview/interview.component';
import { CandidatePageComponent } from './pages/candidate/candidate-page/candidate-page.component';
import { HeaderComponent } from './layout/header/header.component';
import { MatSelectModule } from '@angular/material';
import { TimelineComponent } from './pages/candidate/candidate-page/timeline/timeline.component';
import {HttpClientModule} from '@angular/common/http';
import { NewNotesDialogComponent } from './pages/candidate/candidate-page/timeline/new-notes-dialog/new-notes-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidatePageComponent,
    CandidateComponent,
    VacancyComponent,
    InterviewComponent,
    HeaderComponent,
    TimelineComponent,
    NewNotesDialogComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
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
  entryComponents: []
})

export class AppModule {

}
