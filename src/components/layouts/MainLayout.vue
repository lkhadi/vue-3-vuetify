<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import { useDisplay } from 'vuetify';
import { useAuthStore } from '@/stores/auth';
import { get } from "@/plugins/axios";
import SideBar from '@/components/layouts/SideBar.vue';
const { mobile } = useDisplay();

const drawer = ref({
    drawer: true,
    permanent: true
});
const user = ref(JSON.parse(localStorage.getItem('user')));
const authStore = useAuthStore();

if (mobile.value) {
    drawer.value.permanent = false;
};

const handleDrawer = (value) => {
    drawer.value.drawer = value;
};

const logout = async () => {
  await get('/auth/logout');
  authStore.logout();
};
</script>
<template>
    <v-layout class="rounded rounded-md">
        <SideBar :drawer="drawer" @change="handleDrawer"/>
        <v-app-bar
            color="#1c2947"
            prominent
            height="50"
            :elevation="1"
          >
            <v-app-bar-nav-icon variant="text" @click.stop="drawer.drawer = !drawer.drawer"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <v-btn id="menu-activator" :text="user.name" variant="text"></v-btn>
            <v-menu activator="#menu-activator">
                <v-list>
                    <!-- <v-list-item to="/profile">
                        <v-list-item-title class="text-body-2">Profile</v-list-item-title>
                    </v-list-item> -->
                    <v-list-item density="compact" @click="logout">
                        <v-list-item-title class="text-body-2">Logout</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
        <v-main>
            <v-container>
                <RouterView />
            </v-container>
        </v-main>
    </v-layout>
</template>