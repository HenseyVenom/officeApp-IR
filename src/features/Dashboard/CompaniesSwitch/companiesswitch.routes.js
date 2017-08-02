import CompaniesList from './views/CompaniesList.view.vue';

export default [
  {
    path: '/companieslist',
    name: 'companieslist',
    component: CompaniesList,
    redirect: '/dashboard/companieslist',
  },
];

