import ExampleView from '@/views/ExampleView.vue';
export default [
  {
    path: '/aktivitas-spmu',
    name: 'aktivitas spmu',
    component: ExampleView,
    meta: {
      title: 'Aktivitas SPMU',
      roles: ['admin', 'approver']
    }
  },
];