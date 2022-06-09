import React from 'react';
const EventList = React.lazy(() => import('components/Pages/EventList'));
const Event = React.lazy(() => import('components/Pages/Event'));
const Calendar = React.lazy(() => import('components/Pages/Calendar'));

export const routes = [
  { path: '/', Component: EventList, name: 'События' },
  { path: '/:id', Component: Event, name: 'События' },
  { path: '/calendar', Component: Calendar, name: 'Календарь' },
];
