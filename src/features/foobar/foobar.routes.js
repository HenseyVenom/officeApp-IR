import FoobarView from './views/foobar.view.vue';
import AlphaView from './views/alpha.view.vue';
import BravoView from './views/bravo.view.vue';
import userTable from './views/userTable.view.vue';
import userAdd from './views/UserAddForm.vue';
import officeTable from './views/officeTable.view.vue';
import levelTable from './views/levelTable.view.vue';
import POIsTable from './views/POIsTable.view.vue';
import beaconTable from './views/beaconTable.view.vue';
import requestTopicTable from './views/requestTopicTable.view.vue';
import domainTable from './views/domainTable.view.vue';
import deviceTable from './views/deviceTable.view.vue';
import NotificationGroupTable from './views/NotificationGroupTable.view.vue';

export default [
  {
    path: '/foo',
    name: 'foo',
    component: FoobarView,
    redirect: '/foo/alpha',
    children: [
      {
        name: 'foo.alpha',
        path: 'alpha',
        component: AlphaView,
      },
      {
        name: 'foo.bravo',
        path: 'bravo',
        component: BravoView,
      },
      {
        name: 'foo.userTable',
        path: 'userTable',
        component: userTable,
      },
      {
        name: 'foo.userAdd',
        path: 'userAdd',
        component: userAdd,
      },
      {
        name: 'foo.officeTable',
        path: 'officeTable',
        component: officeTable,
      },
      {
        name: 'foo.levelTable',
        path: 'levelTable',
        component: levelTable,
      },
      {
        name: 'foo.POIsTable',
        path: 'POIsTable',
        component: POIsTable,
      },
      {
        name: 'foo.beaconTable',
        path: 'beaconTable',
        component: beaconTable,
      },
      {
        name: 'foo.requestTopicTable',
        path: 'requestTopicTable',
        component: requestTopicTable,
      },
      {
        name: 'foo.domainTable',
        path: 'domainTable',
        component: domainTable,
      },
      {
        name: 'foo.deviceTable',
        path: 'deviceTable',
        component: deviceTable,
      },
      {
        name: 'foo.NotificationGroupTable',
        path: 'NotificationGroupTable',
        component: NotificationGroupTable,
      },
    ],
  },
];
