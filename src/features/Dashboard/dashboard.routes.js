// dashboard.routes.js

// Dashboard view
import DashboardView from './dashboard.view.vue';

// Routes to subpages views
import BeaconsRoutes from './Beacons/beacons.routes';
import CompaniesSwitchRoutes from './CompaniesSwitch/companiesswitch.routes';
import DevicesRoutes from './Devices/devices.routes';
import DomainsRoutes from './Domains/domains.routes';
import LevelsRoutes from './Levels/levels.routes';
import NotificationGroupRoutes from './NotificationGroup/notificationgroup.routes';
import OfficesRoutes from './Offices/offices.routes';
import POIsRoutes from './POIs/pois.routes';
import RequestsRoutes from './Requests/requests.routes';
import RequestsTopicsRoutes from './RequestsTopics/requeststopics.routes';
import UsersRoutes from './Users/users.routes';

export default [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    redirect: '/dashboard',
    children: [
      {
        name: 'dashboard.userslist',
        path: 'userslist',
        component: UsersRoutes,
      },
      {
        name: 'dashboard.beaconslist',
        path: 'beaconlist',
        component: BeaconsRoutes,
      },
      {
        name: 'dashboard.companiesswitchlist',
        path: 'companiesswitchlist',
        component: CompaniesSwitchRoutes,
      },
      {
        name: 'dashboard.deviceslist',
        path: 'deviceslist',
        component: DevicesRoutes,
      },
      {
        name: 'dashboard.domainslist',
        path: 'domainslist',
        component: DomainsRoutes,
      },
      {
        name: 'dashboard.levelslist',
        path: 'levelslist',
        component: LevelsRoutes,
      },
      {
        name: 'dashboard.notificationgrouplist',
        path: 'notificationgrouplist',
        component: NotificationGroupRoutes,
      },
      {
        name: 'dashboard.officeslist',
        path: 'officeslist',
        component: OfficesRoutes,
      },
      {
        name: 'dashboard.poislist',
        path: 'poislist',
        component: POIsRoutes,
      },
      {
        name: 'dashboard.requestslist',
        path: 'requestslist',
        component: RequestsRoutes,
      },
      {
        name: 'dashboard.requeststopicslist',
        path: 'requeststopicslist',
        component: RequestsTopicsRoutes,
      },
    ],
  },
];

