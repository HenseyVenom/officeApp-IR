import DevicesList from './views/DevicesList.view.vue';
import DevicesAddForm from './views/DevicesAddForm.view.vue';

export default [
  {
    path: '/deviceslist',
    name: 'deviceslist',
    component: DevicesList,
    redirect: '/dashboard/deviceslist',
    children: [
      {
        name: 'dashboard.devicesaddform',
        path: 'devicesaddform',
        component: DevicesAddForm,
      },
    ],
  },
];

