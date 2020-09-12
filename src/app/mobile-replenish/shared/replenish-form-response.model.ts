import { ReplenishForm } from './replenish-form.model';

export interface ReplenishFormResponse {
  status: typeof RESPONSE_STATUS_SUCCESS | typeof RESPONSE_STATUS_ERROR;
  success: boolean;
  data: { sent: ReplenishForm, message: string };
}

export const RESPONSE_STATUS_SUCCESS = 200;
export const RESPONSE_STATUS_ERROR = 500;
