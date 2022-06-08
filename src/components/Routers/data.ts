import EventList from 'components/Pages/EventList';
import Event from 'components/Pages/Event';
import Calendar from 'components/Pages/Calendar';

export const routes = [
  { path: '/', Component: EventList, name: 'События' },
  { path: '/:id', Component: Event, name: 'События' },
  { path: '/calendar', Component: Calendar, name: 'Календарь' },
];
