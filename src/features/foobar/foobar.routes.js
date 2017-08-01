import FoobarView from './views/foobar.view.vue';
import AlphaView from './views/alpha.view.vue';
import BravoView from './views/bravo.view.vue';
import userTable from './views/users/userTable.view.vue';
import officeTable from './views/offices/officeTable.view.vue';
import levelTable from './views/level/levelTable.view.vue';

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
        name: 'foo.officeTable',
        path: 'officeTable',
        component: officeTable,
      },
      {
        name: 'foo.levelTable',
        path: 'levelTable',
        component: levelTable,
      },
    ],
  },
];
