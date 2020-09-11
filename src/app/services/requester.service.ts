import { Injectable } from '@angular/core';
import { FillForm, MobileOperator, MockFillType, RESPONSE_STATUS_ERROR, RESPONSE_STATUS_SUCCESS } from '../typings';
import delay from 'delay';

@Injectable({
  providedIn: 'root'
})

export class RequesterService {

  public getOperator(id: number = -1): MobileOperator | null {
    const operator = operators.filter(item => item.id === id);
    return operator ? operator[0] : null;
  }

  public getAllOperators(): MobileOperator[] {
    return operators;
  }

  public async fill(data: FillForm): Promise<MockFillType> {
    console.log(data);

    // return this.http.post('/random', data, {});

    await delay(2000);

    if (Math.round(Math.random())) {
      return {status: RESPONSE_STATUS_SUCCESS, success: true, data: {sent: data, message: 'Payment is successful'}};
    } else {
      return {status: RESPONSE_STATUS_ERROR, success: false, data: {sent: data, message: 'Payment is failed'}};
    }
  }
}

const operators = [
  {
    name: 'Beeline',
    logo: '/assets/images/beeline.svg',
    id: 1,
    codes: [900, 902, 903, 904, 905, 906, 908, 909, 950, 951, 953, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 980, 983, 986]
  },
  {
    name: 'MTS',
    logo: '/assets/images/mts.svg',
    id: 2,
    codes: [902, 904, 908, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 950, 978, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989]
  },
  {
    name: 'Megafon',
    logo: '/assets/images/megafon.svg',
    id: 3,
    codes: [902, 904, 908, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 936, 937, 938, 939, 950, 999]
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
