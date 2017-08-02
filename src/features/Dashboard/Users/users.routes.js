import UsersList from './views/UsersList.view.vue';
import UsersAddForm from './views/UsersAddForm.view.vue';

export default [
  {
    path: '/userslist',
    name: 'userslist',
    component: UsersList,
    redirect: '/dashboard/userslist',
    children: [
      {
        name: 'dashboard.usersaddform',
        path: 'usersaddform',
        component: UsersAddForm,
      },
    ],
  },
];

