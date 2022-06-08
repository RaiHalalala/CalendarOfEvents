import {
  Event as EventIcon,
  GridView as GridViewIcon,
} from '@mui/icons-material';

export type LinkType = {
  to: string;
  setIcon: (color: 'primary' | 'inherit', className: string) => React.ReactNode;
  name: string;
};

export const links: LinkType[] = [
  {
    to: '/',
    setIcon: (color, className) => (
      <EventIcon color={color} className={className} />
    ),
    name: 'События',
  },
  {
    to: '/calendar',
    setIcon: (color, className) => (
      <GridViewIcon color={color} className={className} />
    ),
    name: 'Календарь',
  },
];
