import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import IMobileOperator from './typings/IMobileOperator';

@Injectable({
  providedIn: 'root'
})
export class RequesterService {

  constructor(private http: HttpClient) {
  }

  public getOperator(id: number = -1): IMobileOperator {
    return operators.filter(item => item.id === id)[0];
  }

  public getAllOperators(): IMobileOperator[] {
    return operators;
  }

  public fill(data) {
    console.log(data);
    // return this.http.post('/random', data, {});
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.round(Math.random())) {
          resolve({status: 200, success: true, data: {message: 'Successfully payment'}});
        } else {
          reject({status: 500, success: false, data: {message: 'Payment is failde'}});
        }
      }, 2000);
    });
  }
}

const operators = [
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
  // {
  //   name: 'Tele2',
  //   logo: '/assets/images/tele2.svg',
  //   id: 4,
  // },
  // {
  //   name: 'Yota',
  //   logo: '/assets/images/yota.svg',
  //   id: 5,
  // },
  // {
  //   name: '',
  //   id: 6,
  // },
  // {
  //   name: '',
  //   id: 7,
  // },
  // {
  //   name: '',
  //   id: 8,
  // },
  // {
  //   name: '',
  //   id: 9,
  // }
];
