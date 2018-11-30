import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

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

  loadCV() {

  }

  addNotes() {
    const dialogNew = this.dialog.open(NewNotesDialogComponent, {
      data: {...this.notes}
    });

    dialogNew.afterClosed().subscribe(result => {
      if (result) {
        this.notes.push(result);
      }
    });
  }

  addInterview() {

  }

  addExperience() {

  }

}
