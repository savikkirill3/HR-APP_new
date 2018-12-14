import {Component, OnInit} from '@angular/core';
import {Candidate, Vacancy} from '../../../shared/interfaces';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {
  candidates: Candidate[] = [
    {
      name: 'Lilliya',
      imgSrc: 'https://assets.capitalfm.com/2018/23/lilliya-scarlett-instagram-1528814125-custom-0.png',
      phone: '+32565863212',
      _id: '3'
    },
    {
      name: 'Lilliya',
      imgSrc: 'https://assets.capitalfm.com/2018/23/lilliya-scarlett-instagram-1528814125-custom-0.png',
      phone: '+32565863212',
      _id: '3'
    },
    {
      name: 'Lilliya',
      imgSrc: 'https://assets.capitalfm.com/2018/23/lilliya-scarlett-instagram-1528814125-custom-0.png',
      phone: '+32565863212',
      _id: '3'
    }
  ];

  vacancies: Vacancy[] = [
    {name: '1', status: 'closed', _id: '1', candidates: this.candidates},
    {name: '2', status: 'opened', _id: '2', candidates: []},
    {name: '3', status: 'opened', _id: '3', candidates: []}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
