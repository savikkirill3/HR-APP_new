import {Component} from '@angular/core';

export interface CandidateShortInfo {
  name: string;
  position: string;
}

export interface Contacts {
  name: string;
  value: string;
}

@Component({
  selector: 'app-short-info',
  templateUrl: './short-info.component.html',
  styleUrls: ['./short-info.component.css']
})
export class ShortInfoComponent {
  imgSrc = 'https://assets.capitalfm.com/2018/23/lilliya-scarlett-instagram-1528814125-custom-0.png';

  check: Array<boolean> = [false, false, false];

  candidate: CandidateShortInfo = {
    name: 'Lilliya ',
    position: 'Front-end developer'
  };

  contacts: Contacts[] = [
    {name: 'Telephone', value: '+3752980321323'},
    {name: 'Skype', value: 'liliya333'},
    {name: 'Email', value: 'liliya333@gmail.com'},
  ];

  constructor() {
  }

  onFileUpload(e: Event) {
    const inputElement = e.target as HTMLInputElement;
    const file = inputElement.files[0];
    this.handleFileUpload(file);
    console.log(e);
  }

  private handleFileUpload(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imgSrc = reader.result as string;
    };
  }

  change(i) {
    if (this.check[i] === true) {
      this.check[i] = false;
    } else {
      this.check[i] = true;
    }
  }
