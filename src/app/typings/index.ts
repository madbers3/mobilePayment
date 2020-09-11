export interface MobileOperator {
  id: number;
  name?: string;
  logo: string;
  codes: number[];
}

export interface FillForm {
  amount: string;
  phone: string;
}

export interface MockFillType {
  status: typeof RESPONSE_STATUS_SUCCESS | typeof RESPONSE_STATUS_ERROR;
  success: boolean;
  data: { sent: FillForm, message: string };
}

export const RESPONSE_STATUS_SUCCESS = 200;
export const RESPONSE_STATUS_ERROR = 500;
