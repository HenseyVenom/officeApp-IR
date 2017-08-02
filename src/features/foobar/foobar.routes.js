import FoobarView from './views/foobar.view.vue';
import AlphaView from './views/alpha.view.vue';
import BravoView from './views/bravo.view.vue';
import userTable from './views/userTable.view.vue';
import userAdd from './views/UserAddForm.vue';
import officeAdd from './views/OfficeAddForm.vue';
import levelAdd from './views/LevelAddForm.vue';


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
        path: 'useradd',
        component: userAdd,
      },
      {
        name: 'foo.officeAdd',
        path: 'officeaddform',
        component: officeAdd,
      },
      {
        name: 'foo.levelAdd',
        path: 'leveladdform',
        component: levelAdd,
      },
    ],
  },
];
