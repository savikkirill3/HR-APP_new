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
      surname: 'Scarlett',
      photo: 'https://assets.capitalfm.com/2018/23/lilliya-scarlett-instagram-1528814125-custom-0.png',
      id: '2'
    },
    {
      name: 'Till',
      surname: 'Lindemann',
      photo: 'https://24smi.org/public/media/2018/7/26/3a7d5326675226a244c7b4f7a853bffe-till-rammstein-till-lindemann-hot.jpg',
      id: '1'
    },
    {
      name: 'David',
      surname: 'Beckham',
      photo: 'http://img-fotki.yandex.ru/get/5639/157185180.62/0_b98e2_a784197f_XL.jpg',
      id: '3'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
