import {Component, OnInit} from '@angular/core';
import {Candidate} from '../../../shared/interfaces';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  candidates: Candidate[] = [
    {
      name: 'Lilliya',
      imgSrc: 'https://assets.capitalfm.com/2018/23/lilliya-scarlett-instagram-1528814125-custom-0.png',
      _id: '3'
    },
    {
      name: 'Lilliya',
      imgSrc: 'https://assets.capitalfm.com/2018/23/lilliya-scarlett-instagram-1528814125-custom-0.png',
      _id: '2'
    },
    {
      name: 'Lilliya',
      imgSrc: 'https://assets.capitalfm.com/2018/23/lilliya-scarlett-instagram-1528814125-custom-0.png',
      _id: '1'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
