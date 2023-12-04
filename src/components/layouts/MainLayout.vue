<script setup>
import { ref, onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { useDisplay } from 'vuetify';
import { useAuthStore } from '@/stores/auth';
const { mobile } = useDisplay();

const appName = import.meta.env.VITE_APP_NAME;
const drawer = ref(false);
const user = ref(JSON.parse(localStorage.getItem('user')));
const authStore = useAuthStore();

if (mobile.value) {
    drawer.value = true;
}
</script>
<template>
    <v-layout class="rounded rounded-md">
        <v-navigation-drawer :rail="drawer" permanent color="#101A32">
            <v-list>
                <v-list-item><v-toolbar-title>{{ appName }}</v-toolbar-title></v-list-item>
                <v-divider></v-divider>
                <v-list-item class="text-body-2" density="compact" to="/" exact link prepend-icon="mdi-home"
                    color="#5ea4f9">Dashboard</v-list-item>
                <v-list-item class="text-body-2" density="compact" to="/buku" link prepend-icon="mdi-book"
                    color="#5ea4f9">Buku</v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar color="#1c2947" prominent height="50" :elevation="1">
            <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <v-btn id="menu-activator" :text="user.name" variant="text"></v-btn>
            <v-menu activator="#menu-activator">
                <v-list>
                    <v-list-item to="/profile">
                        <v-list-item-title>Profile</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="authStore.logout">
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
        <v-main style="min-height: 300px; width: 100%;">
            <RouterView />
        </v-main>
    </v-layout>
</template>