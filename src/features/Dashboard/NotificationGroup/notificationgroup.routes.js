import NotificationGroupList from './views/NotificationGroupList.view.vue';
import NotificationGroupAddForm from './views/NotificationGroupAddForm.view.vue';

export default [
  {
    path: '/notificationgrouplist',
    name: 'notificatingrouplist',
    component: NotificationGroupList,
    redirect: '/dashboard/notificationgrouplist',
    children: [
      {
        name: 'dashboard.notificationgroupaddform',
        path: 'notificationgroupaddform',
        component: NotificationGroupAddForm,
      },
    ],
  },
];

