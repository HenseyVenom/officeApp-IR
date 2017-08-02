import RequestsTopicsList from './views/RequestsTopicsList.view.vue';
import RequestsTopicsAddForm from './views/RequestsTopicsAddForm.view.vue';

export default [
  {
    path: '/requeststopics',
    name: 'requeststopics',
    component: RequestsTopicsList,
    redirect: '/dashboard/requeststopicslist',
    children: [
      {
        name: 'dashboard.requeststopicsaddform',
        path: 'requeststopicsaddform',
        component: RequestsTopicsAddForm,
      },
    ],
  },
];

