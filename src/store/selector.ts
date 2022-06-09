import { selector, selectorFamily } from 'recoil';
import { filterState, eventsList, myEventsList, limitState } from './atom';
import { EventType } from 'type/event';

//return filtering events
export const convertEventsList = selector({
  key: 'convertEventsList',
  get: ({ get }) => {
    const filter = get(filterState);
    const data = get(eventsList);
    return filterByDate(filter, data);
  },
});

//return filtering & limit my events
export const convertMyEventsList = selector({
  key: 'convertMyEventsList',
  get: ({ get }) => {
    const limit = get(limitState);
    const filter = get(filterState);
    const data = get(myEventsList);
    const filterData = filterByDate(
      filter,
      data.map(({ event }) => event),
    );
    if (filterData.length > limit) {
      return {
        end: false,
        list: setLimit(limit, filterData),
      };
    }
    return {
      end: true,
      list: filterData,
    };
  },
});

//current event, in page '/[id]'
export const currentEvent = selectorFamily({
  key: 'currentEvent',
  get:
    (_id: number) =>
    ({ get }) => {
      const data = get(eventsList);
      const event = data.find(({ id }) => id === _id) || null;
      return event;
    },
});

// find customers of current event, in page '/[id]'
export const customersCurrentEvent = selectorFamily({
  key: 'customersCurrentEvent',
  get:
    (_id: number) =>
    ({ get }) => {
      const data = get(myEventsList);
      const customers = data.filter(({ id }) => id === _id) || null;
      return customers;
    },
});

const filterByDate = (filter: Date, data: EventType[]) => {
  return data.filter(
    ({ date }) =>
      new Date(date).getMonth() === new Date(filter).getMonth() &&
      new Date(date).getFullYear() === new Date(filter).getFullYear(),
  );
};

const setLimit = (limit: number, data: EventType[]) => {
  return data.filter((_, index) => index + 1 <= limit);
};
