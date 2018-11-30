import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {NewNotesDialogComponent} from './new-notes-dialog/new-notes-dialog.component';

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
    });

    dialogNew.afterClosed().subscribe(result => {
      if (result) {
      }
    });
  }

  addInterview() {

  }

  addExperience() {

  }

}
