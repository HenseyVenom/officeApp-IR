import POIsList from './views/POIsList.view.vue';
import POIsAddForm from './views/POIsAddForm.view.vue';

export default [
  {
    path: 'pois',
    name: 'pois',
    component: POIsList,
    redirect: '/dashboard/poislist',
    children: [
      {
        name: 'dashboard/poisaddform',
        path: 'poisaddform',
        component: POIsAddForm,
      },
    ],
  },
];
