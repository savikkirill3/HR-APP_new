import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {NewNotesDialogComponent} from './new-notes-dialog/new-notes-dialog.component';
import {NewExperienceDialogComponent} from './new-experience-dialog/new-experience-dialog.component';

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
  isShowAddCvs = false;
  cvList = [];
  candidateInfo = [];
  notes: CandidateNotes[] = [];
  experiences: CandidateExperience[] = [];

  constructor(public dialog: MatDialog, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'cv-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/cv.svg'));
    iconRegistry.addSvgIcon(
      'notes-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/notes.svg'));
    iconRegistry.addSvgIcon(
      'interview-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/interview.svg'));
    iconRegistry.addSvgIcon(
      'experience-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/experience.svg'));
  }

  ngOnInit() {
  }

  loadCV(event: {file: File }) {
    this.cvList.push(event.file);
    this.isShowAddCvs = false;
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

}
