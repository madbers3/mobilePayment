export class MobileOperator {
  id: number;
  name?: string;
  logo: string;
  codes: number[];
}

export class FillForm {
  amount: string;
  phone: string;
}

export class MockFillType {
  status: number;
  success: boolean;
  data: { sent: FillForm, message: string };
}
