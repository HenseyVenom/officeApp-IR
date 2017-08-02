import OfficesList from './views/OfficesList.view.vue';
import OfficesAddForm from './/views/OfficesAddForm.view.vue';

export default [
  {
    path: '/officeslist',
    name: 'officeslist',
    component: OfficesList,
    redirect: '/dashboard/officeslistlist',
    children: [
      {
        name: 'dashboard.officesaddform',
        path: 'officesaddform',
        component: OfficesAddForm,
      },
    ],
  },
];

