import { IconType } from '@components/icons/Icons';

interface Route {
  name: string;
  path: string;
  icon: IconType;
  badge?: boolean;
}

const routes: Array<Route> = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'home',
    badge: true,
  },
  {
    name: 'Explore City',
    path: '/explore-city',
    icon: 'dashboard',
  },
  {
    name: 'Ticket',
    path: '/ticket',
    icon: 'mail',
  },
  {
    name: 'Favorites',
    path: '/favorites',
    icon: 'favourite',
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: 'settings',
  },
];

export default routes;
