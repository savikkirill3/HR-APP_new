import { Component } from '@angular/core';

export interface CandidateShortInfo {
  name: string;
  position: string;
  telephone: string;
  skype: string;
  email: string;
}
@Component({
  selector: 'app-short-info',
  templateUrl: './short-info.component.html',
  styleUrls: ['./short-info.component.css']
})
export class ShortInfoComponent {
  imgSrc = 'https://assets.capitalfm.com/2018/23/lilliya-scarlett-instagram-1528814125-custom-0.png';
  check1: boolean = false;
  check2: boolean = false;
  check3: boolean = false;

  candidate: CandidateShortInfo = {
    name: 'Lilliya ',
    position: '',
    telephone: '+375338768978',
    skype: '',
    email: ''
  };
  constructor() { }

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

  change1() {
    if(this.check1 === true){
      this.check1 = false
    }
    else if(this.check1 === false){
      this.check1 = true
    }
  }
  change2() {
    if(this.check2 === true){
      this.check2 = false
    }
    else if(this.check2 === false){
      this.check2 = true
    }
  }
  change3() {
    if(this.check3 === true){
      this.check3 = false
    }
    else if(this.check3 === false){
      this.check3 = true
    }
  }
}
