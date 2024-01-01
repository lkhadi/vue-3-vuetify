import AktivitasView from '@/views/spmu/AktivitasView.vue';
import RapatView from '@/views/rapat/RapatView.vue';
import RapatAddView from '@/views/rapat/RapatAddView.vue';
import RapatEditView from '@/views/rapat/RapatEditView.vue';
import RapatDetailView from '@/views/rapat/RapatDetailView.vue';
import RapatSayaView from '@/views/rapat/RapatSayaView.vue';
import RapatPresensiView from '@/views/rapat/RapatPresensiView.vue';

export default [
  {
    path: '/aktivitas-spmu',
    name: 'aktivitas spmu',
    component: AktivitasView,
    meta: {
      title: 'Aktivitas SPMU',
      roles: ['admin', 'approver']
    }
  },
  {
    path: '/rapat',
    name: 'rapat',
    component: RapatView,
    meta: {
      title: 'Rapat',
      roles: ['admin', 'staf', 'approver']
    }
  },
  {
    path: '/rapat-saya',
    name: 'jadwal rapat saya',
    component: RapatSayaView,
    meta: {
      title: 'Jadwal Rapat Saya',
      roles: ['admin', 'staf', 'approver']
    }
  },
  {
    path: '/rapat/add',
    name: 'tambah rapat',
    component: RapatAddView,
    meta: {
      title: 'Tambah Rapat',
      roles: ['admin', 'staf', 'approver']
    }
  },
  {
    path: '/rapat/edit/:uuid',
    name: 'edit rapat',
    component: RapatEditView,
    meta: {
      title: 'Edit Rapat',
      roles: ['admin', 'staf', 'approver']
    }
  },
  {
    path: '/rapat/detail/:uuid',
    name: 'edit detail',
    component: RapatDetailView,
    meta: {
      title: 'Detail Rapat',
      roles: ['admin', 'staf', 'approver']
    }
  },
  {
    path: '/rapat/presensi/:uuid',
    name: 'rapat-presensi',
    component: RapatPresensiView,
    meta: {
      title: 'Presensi Rapat',
      roles: ['admin', 'staf', 'approver']
    }
  },
];