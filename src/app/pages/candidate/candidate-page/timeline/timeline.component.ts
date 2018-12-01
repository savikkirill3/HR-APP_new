import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewNotesDialogComponent} from './new-notes-dialog/new-notes-dialog.component';
import {NewExperienceDialogComponent} from './new-experience-dialog/new-experience-dialog.component';
import {NewCvDialogComponent} from './new-cv-dialog/new-cv-dialog.component';


/*export interface CandidateInfo {
  Notes: CandidateNotes;
  Experiences: CandidateExperience;
}*/

export interface CandidateNotes {
  Note: string;
  date: Date;
}

export interface CandidateExperience {
  companyName: string;
  dateFrom: Date;
  dateTo: Date;
  position: string;
  date: Date;
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})

export class TimelineComponent implements OnInit {
  interviewSrc = 'https://pp.userapi.com/c846124/v846124033/13c9f6/ObzTSC3ZsW0.jpg';
  cvSrc = 'https://pp.userapi.com/c846124/v846124033/13c9fd/d0YzLGHlF1o.jpg';
  experienceSrc = 'https://pp.userapi.com/c846124/v846124033/13c9ef/8bOFWRFc1P8.jpg';
  notesSrc = 'https://pp.userapi.com/c846124/v846124033/13ca04/Az4jQeTtQqc.jpg';

  cvList = [];
  candidateInfo = [];
  notes: CandidateNotes[] = [];
  experiences: CandidateExperience[] = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  loadCV() {
    const dialogNew = this.dialog.open(NewCvDialogComponent, {
      data: {...this.notes}
    });
    dialogNew.afterClosed().subscribe(result => {
      if (result) {
        result.date = new Date();
        this.cvList.push(result);
        this.candidateInfo.push(result);
        console.log(result);
        this.sortData();
      }
    });
  }

  sortData() {
    this.candidateInfo.sort((n1, n2) => {
      return n2.date.getTime() - n1.date.getTime();
    });
  }

  addNotes() {
    const dialogNew = this.dialog.open(NewNotesDialogComponent, {
      data: {...this.notes}
    });

    dialogNew.afterClosed().subscribe(result => {
      if (result) {
        result.date = new Date();
        this.notes.push(result);
        this.candidateInfo.push(result);
        console.log(this.candidateInfo);
        this.sortData();
      }
    });
  }

  addInterview() {

  }

  addExperience() {
    const dialogNew = this.dialog.open(NewExperienceDialogComponent, {
      data: {...this.experiences}
    });

    dialogNew.afterClosed().subscribe(result => {
      if (result) {
        result.date = new Date();
        this.experiences.push(result);
        this.candidateInfo.push(result);
        this.sortData();
      }
    });
  }

  saveData() {

  }

}
