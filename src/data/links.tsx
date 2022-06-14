export type LinkType = {
  to: string;
  icon: { src: string; alt: string };
  name: string;
};

export const links: LinkType[] = [
  {
    to: '/',
    icon: { src: '/static/cards-icon.png', alt: 'cards-icon' },
    name: 'События',
  },
  {
    to: '/calendar',
    icon: { src: '/static/calendar-icon.png', alt: 'calendar-icon' },
    name: 'Календарь',
  },
];
