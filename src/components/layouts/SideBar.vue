<script setup>
    import {ref, watch} from 'vue';
    import logo from '@/assets/images/favicon.png';
    const appName = import.meta.env.VITE_APP_NAME;
    const props = defineProps(['drawer']);
    const emit = defineEmits(['change']);
    const drawerIn = ref(props.drawer.drawer);
    watch(props, (newValue) => {
        drawerIn.value = newValue.drawer.drawer;
    });

    watch(drawerIn, newValue => {
        emit('change', newValue);
    });
</script>
<template>
    <v-navigation-drawer
        v-model="drawerIn"
        temporary
        :permanent="props.drawer.permanent"
        color="#101A32"
    >
        <v-list>
            <div class="d-flex pa-4">
                <img :src="logo" class="mr-4">
                <span>{{ appName }}</span>
            </div>
            <v-divider></v-divider>
            <v-list-item class="text-body-2" density="compact" to="/" exact link prepend-icon="mdi-home" color="#5ea4f9">Dashboard</v-list-item>
            <v-list-group density="compact" value="Perpus">
                <template v-slot:activator="{props}">
                    <v-list-item
                            class="text-body-2"
                            v-bind="props"
                            prepend-icon="mdi-domain"
                            color="#5ea4f9"
                    >Perpus</v-list-item>
                </template>
                <v-list-item density="compact" to="/perpus" link color="#5ea4f9" class="text-body-2">List Perpus</v-list-item>
                <v-list-item density="compact" to="/perpus/lokasi" link color="#5ea4f9" class="text-body-2">Lokasi Portal Baca</v-list-item>
                <v-list-item density="compact" to="/perpus/buku" link color="#5ea4f9" class="text-body-2">Koleksi Buku</v-list-item>
            </v-list-group>
            <v-list-group density="compact" value="Buku">
                <template v-slot:activator="{props}">
                    <v-list-item
                            class="text-body-2"
                            v-bind="props"
                            prepend-icon="mdi-book"
                            color="#5ea4f9"
                    >Buku</v-list-item>
                </template>
                <v-list-item density="compact" to="/buku/kategori" link color="#5ea4f9" class="text-body-2">Kategori Buku</v-list-item>
                <v-list-item density="compact" to="/buku" link color="#5ea4f9" class="text-body-2">List Buku</v-list-item>
            </v-list-group>
            <v-list-item class="text-body-2" density="compact" to="/penerbit" link prepend-icon="mdi-book-account" color="#5ea4f9">Penerbit</v-list-item>
            <v-list-item class="text-body-2" density="compact" to="/users" link prepend-icon="mdi-account-group" color="#5ea4f9">Users</v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>