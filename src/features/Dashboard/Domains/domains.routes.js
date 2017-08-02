import DomainsList from './views/DomainsList.view.vue';
import DomainsAddForm from './views/DomainsAddForm.view.vue';

export default [
  {
    path: '/domainslist',
    name: 'domainslist',
    component: DomainsList,
    redirect: '/dashboard/domainslist',
    children: [
      {
        name: 'dashboard.domainsaddform',
        path: 'domainsaddform',
        component: DomainsAddForm,
      },
    ],
  },
];

