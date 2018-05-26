import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  operators: [Object];
  constructor() {
    this.operators = [
      {
        name: 'Beeline',
        logo: '/assets/images/beeline.svg',
        id: 1
      },
      {
        name: 'MTS',
        logo: '/assets/images/mts.svg',
        id: 2,
      },
      {
        name: 'Megafon',
        logo: '/assets/images/megafon.svg',
        id: 3,
      },
      {
        name: 'Tele2',
        logo: '/assets/images/tele2.svg',
        id: 4,
      },
      {
        name: 'Yota',
        logo: '/assets/images/yota.svg',
        id: 5,
      },
      {
        name: '',
        id: 6,
      },
      {
        name: '',
        id: 7,
      },
      {
        name: '',
        id: 8,
      },
      {
        name: '',
        id: 9,
      }
    ];
  }

  ngOnInit() {
  }

}
