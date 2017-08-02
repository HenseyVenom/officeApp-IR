import FoobarView from './views/foobar.view.vue';
import AlphaView from './views/alpha.view.vue';
import BravoView from './views/bravo.view.vue';
import userTable from './views/userTable.view.vue';
import userAdd from './views/UserAddForm.vue';
import officeTable from './views/officeTable.view.vue';
import levelTable from './views/levelTable.view.vue';
import POIsTable from './views/POIsTable.view.vue';


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
        path: 'userAdd',
        component: userAdd,
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
      {
        name: 'foo.POIsTable',
        path: 'POIsTable',
        component: POIsTable,
      },
    ],
  },
];
