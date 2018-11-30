import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-new-experience-dialog',
  templateUrl: './new-experience-dialog.component.html',
  styleUrls: ['./new-experience-dialog.component.css']
})
export class NewExperienceDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

}
