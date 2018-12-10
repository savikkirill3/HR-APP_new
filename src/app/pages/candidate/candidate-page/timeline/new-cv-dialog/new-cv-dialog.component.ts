import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {CandidateNotes} from '../timeline.component';

@Component({
  selector: 'app-new-cv-dialog',
  templateUrl: './new-cv-dialog.component.html',
  styleUrls: ['./new-cv-dialog.component.css']
})
export class NewCvDialogComponent implements OnInit {
  @Output()
  CVFileEmitter: EventEmitter<{file: any}> = new EventEmitter();

  @Output('close')
  closeEmitter: EventEmitter<null> = new EventEmitter();

  ngOnInit() {
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data) {

  }

  addCV(event) {
    console.log('event ->', event);

    if (event.target.files) {
      this.readFile(event.target.files[0]).then((file => {
        this.CVFileEmitter.emit({file: file});
      }));
    }
  }

  close() {
    this.closeEmitter.emit();

  }

  private readFile(file: File): Promise<string> {
    return new Promise((resolve: Function, reject: Function) => {
      const reader = new FileReader();
      // reads file as URL! Just insert it in link
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve({
          name: file.name,
          size: file.size,
          data: reader.result,
          mime: reader.result.split('base64')[0].substr(reader.result.split('base64')[0].indexOf(':') + 1).slice(0, -1)
        });
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  }

}
