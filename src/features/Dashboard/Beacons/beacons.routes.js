import BeaconsList from './views/BeaconsList.view.vue';
import BeaconsAddForm from './views/BeaconsAddForm.view.vue';

export default [
  {
    path: '/beaconslist',
    name: 'beaconslist',
    component: BeaconsList,
    redirect: '/dashboard/beaconslist',
    children: [
      {
        name: 'dashboard.beaconsaddform',
        path: 'beaconsaddform',
        component: BeaconsAddForm,
      },
    ],
  },
];

