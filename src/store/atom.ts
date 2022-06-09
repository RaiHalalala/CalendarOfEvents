import { atom } from 'recoil';
import { fetchEvents } from 'api';
import { Customer } from 'type/customer';
import { localStorageEffect } from './localStarageEffect';

export const LIMIT = 3;
//limit return events in page '/calendar'
export const limitState = atom<number>({
  key: 'limitState',
  default: LIMIT,
});

//all events from API
export const eventsList = atom({
  key: 'eventsList',
  default: fetchEvents(),
});

//filter by month and year in pages '/' and '/calendar'
export const filterState = atom<Date>({
  key: 'filterState',
  default: new Date(),
});

//get customers from local storage
const getCustomers = (): Customer[] => {
  const savedValue = localStorage.getItem('customers');
  if (savedValue != null) {
    return JSON.parse(savedValue);
  }
  return [];
};

//subscribe events save in local storage
export const myEventsList = atom<Customer[]>({
  key: 'myEventsList',
  default: getCustomers(),
  effects: [localStorageEffect('customers')],
});
