import LevelsList from './views/LevelsList.view.vue';
import LevelsAddForm from './views/LevelsAddForm.view.vue';

export default [
  {
    path: '/levelslist',
    name: 'levelslist',
    component: LevelsList,
    redirect: '/dashboard/levelslist',
    children: [
      {
        name: 'dashboard.levelsaddform',
        path: 'levelsaddform',
        component: LevelsAddForm,
      },
    ],
  },
];

