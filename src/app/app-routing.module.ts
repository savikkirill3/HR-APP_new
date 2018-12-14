import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InterviewComponent} from './pages/interview/interview.component';
import {CandidateComponent} from './pages/candidate/candidate.component';
import {VacancyComponent} from './pages/vacancy/vacancy.component';
import {CandidatePageComponent} from './pages/candidate/candidate-page/candidate-page.component';
import {VacancyPageComponent} from './pages/vacancy/vacancy-page/vacancy-page.component';

const routes: Routes = [
  {path: 'interview', component: InterviewComponent},
  {path: 'vacancy', component: VacancyComponent},
  {path: 'vacancy/:id', component: VacancyPageComponent},
  {path: 'candidate', component: CandidateComponent},
  {path: 'candidate/:id', component: CandidatePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
