import RequestsList from './views/RequestsList.view.vue';
import RequestsAddForm from './views/RequestsAddForm.view.vue';

export default [
  {
    path: '/request',
    name: 'request',
    component: RequestsList,
    redirect: '/dashboard/requestlist',
    children: [
      {
        name: 'dashboard.requestsaddform',
        path: 'requestaddform',
        component: RequestsAddForm,
      },
    ],
  },
];
