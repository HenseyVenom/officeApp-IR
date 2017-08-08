// file dashboard.routes.js

// Dashboard main view
import DashboardView from './dashboard.view.vue';

// Users views
import UsersListView from './Users/views/UsersList.view.vue';
import UsersAddFormView from './Users/views/UsersAddForm.view.vue';
import UsersUpdateFormView from './Users/views/UsersUpdateForm.view.vue';

// Beacons beacons views
import BeaconsListView from './Beacons/views/BeaconsList.view.vue';
import BeaconsAddFormView from './Beacons/views/BeaconsAddForm.view.vue';

// Companies switch view
import CompaniesListView from './CompaniesSwitch/view/CompaniesList.view.vue';

// Devices views
import DevicesListView from './Devices/views/DevicesList.view.vue';
import DevicesAddFormView from './Devices/views/DevicesAddForm.view.vue';

// Domains views
import DomainsListView from './Domains/views/DomainsList.view.vue';
import DomainsAddFormView from './Domains/views/DomainsAddForm.view.vue';

// Levels views
import LevelsListView from './Levels/views/LevelsList.view.vue';
import LevelsAddFormView from './Levels/views/LevelsAddForm.view.vue';

// Notification group views
import NotificationGroupListView from './NotificationGroup/views/NotificationGroupList.view.vue';
import NotificationGroupAddFormView from './NotificationGroup/views/NotificationGroupAddForm.view.vue';

// Offices views
import OfficesListView from './Offices/views/OfficesList.view.vue';
import OfficesAddFormView from './Offices/views/OfficesAddForm.view.vue';

// Pois views
import POIsListView from './POIs/views/POIsList.view.vue';
import POIsAddFormView from './POIs/views/POIsAddForm.view.vue';

// Requests views
import RequestsListView from './Requests/views/RequestsList.view.vue';
import RequestsAddFormView from './Requests/views/RequestsAddForm.view.vue';

// Requests topics views
import RequestsTopicsListView from './RequestsTopics/views/RequestsTopicsList.view.vue';
import RequestsTopicsAddFormView from './RequestsTopics/views/RequestsTopicsAddForm.view.vue';

// Routes tree
export default [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    redirect: '/dashboard/userslist',
    children: [
      {
        name: 'dashboard.userslist',
        path: 'userslist',
        component: UsersListView,
      },
      {
        name: 'dashboard.useraddform',
        path: 'useraddform',
        component: UsersAddFormView,
      },
      {
        name: 'dashboard.beaconslist',
        path: 'beaconslist',
        component: BeaconsListView,
      },
      {
        name: 'dashboard.beaconsaddform',
        path: 'beaconsaddform',
        component: BeaconsAddFormView,
      },
      {
        name: 'dashboard.companieslist',
        path: 'companieslist',
        component: CompaniesListView,
      },
      {
        name: 'dashboard.deviceslist',
        path: 'deviceslist',
        component: DevicesListView,
      },
      {
        name: 'dashboard.devicesaddform',
        path: 'devicesaddform',
        component: DevicesAddFormView,
      },
      {
        name: 'dashboard.domainslist',
        path: 'domainslist',
        component: DomainsListView,
      },
      {
        name: 'dashboard.domainsaddform',
        path: 'domainsaddform',
        component: DomainsAddFormView,
      },
      {
        name: 'dashboard.levelslist',
        path: 'levelslist',
        component: LevelsListView,
      },
      {
        name: 'dashboard.levelsaddform',
        path: 'levelsaddform',
        component: LevelsAddFormView,
      },
      {
        name: 'dashboard.notificationgrouplist',
        path: 'notificationgrouplist',
        component: NotificationGroupListView,
      },
      {
        name: 'dashboard.notificationgroupaddform',
        path: 'notificationgroupaddform',
        component: NotificationGroupAddFormView,
      },
      {
        name: 'dashboard.officeslist',
        path: 'officeslist',
        component: OfficesListView,
      },
      {
        name: 'dashboard.officesaddform',
        path: 'officesaddform',
        component: OfficesAddFormView,
      },
      {
        name: 'dashboard.poislist',
        path: 'poislist',
        component: POIsListView,
      },
      {
        name: 'dashboard.poisaddform',
        path: 'poisaddform',
        component: POIsAddFormView,
      },
      {
        name: 'dashboard.requestslist',
        path: 'requestslist',
        component: RequestsListView,
      },
      {
        name: 'dashboard.requestsaddform',
        path: 'requestsaddform',
        component: RequestsAddFormView,
      },
      {
        name: 'dashboard.requeststopicslist',
        path: 'requeststopicslist',
        component: RequestsTopicsListView,
      },
      {
        name: 'dashboard.requeststopicsaddform',
        path: 'requeststopicsaddform',
        component: RequestsTopicsAddFormView,
      },
    ],
  }];
