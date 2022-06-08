import { atom, selector } from 'recoil';
import { Event } from 'type/event';
import { fetchEvents } from 'api';

const LIMIT = 3;

export type InitialState = {
  filtering: Date | null;
  limit: number;
};

export const initialState: InitialState = {
  filtering: null,
  limit: LIMIT,
};

export const getEventsData = selector({
  key: 'getEventsData',
  get: async ({ get }) => {
    const { filtering, limit } = get(EventsState);
    const response = await fetchEvents();
    if (!response) {
      throw response;
    }
    return setLimit(limit, filterByDate(filtering, response));
  },
});

export const EventsState = atom({
  key: 'EventsState',
  default: initialState,
});

const filterByDate = (value: Date | null, data: Event[]) => {
  if (value) {
    return data.filter(({ date }) => date === value);
  }
  return data;
};

const setLimit = (limit: number, data: Event[]) => {
  return data.filter(({ id }) => id < limit);
};
