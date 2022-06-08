import { atom } from 'recoil';
import { Customer } from 'type/customer';

const KEY: string = 'CustomersState';

const initialState: Customer[] = [];

export const CustomersState = atom({
  key: KEY,
  default: initialState,
});
