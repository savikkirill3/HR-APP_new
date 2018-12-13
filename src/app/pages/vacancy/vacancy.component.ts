import { Component, OnInit } from '@angular/core';
import {Vacancy} from '../../../shared/interfaces';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {
  vacancies: Vacancy[] = [
    {name: '1', status: 'good1', _id: '1'},
    {name: '2', status: 'good2', _id: '2'},
    {name: '3', status: 'good3', _id: '3'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
