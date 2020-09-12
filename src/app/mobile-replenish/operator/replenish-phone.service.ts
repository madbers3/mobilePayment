import delay from 'delay';
import { Injectable } from '@angular/core';
import { ReplenishFormResponse, RESPONSE_STATUS_ERROR, RESPONSE_STATUS_SUCCESS } from '../shared/replenish-form-response.model';
import { ReplenishForm } from '../shared/replenish-form.model';

@Injectable({
  providedIn: 'root'
})
export class ReplenishPhoneService {
  public async replenish(data: ReplenishForm): Promise<ReplenishFormResponse> {
    await delay(2000);

    if (Math.round(Math.random())) {
      return {status: RESPONSE_STATUS_SUCCESS, success: true, data: {sent: data, message: 'Payment is successful'}};
    } else {
      return {status: RESPONSE_STATUS_ERROR, success: false, data: {sent: data, message: 'Payment is failed'}};
    }
  }
}
