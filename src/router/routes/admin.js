import ExampleView from '@/views/ExampleView.vue';

export default [
    {
      path: '/example',
      name: 'example',
      component: ExampleView,
      meta: {
        title: 'Example',
        roles: ['example']
      }
    },
];