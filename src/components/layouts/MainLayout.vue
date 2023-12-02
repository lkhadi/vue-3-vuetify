<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { useDisplay } from 'vuetify';
const appName = import.meta.env.VITE_APP_NAME;
let drawer = ref(false);
const menu = ref('home');
const { mobile } = useDisplay();
if (mobile.value) {
    drawer = ref(true);
}

</script>
<template>
    <v-layout class="rounded rounded-md">
        <v-app-bar
            color="light"
            prominent
            height="50"
          >
            <v-app-bar-nav-icon variant="text" @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>{{ appName }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
        </v-app-bar>
        <v-navigation-drawer
            permanent
        >
            <v-divider></v-divider>
            <v-list>
                <RouterLink to="/"><v-list-item link prepend-icon="mdi-folder" :active="menu === 'home'" @click="menu = 'home'">Home</v-list-item></RouterLink>
                <RouterLink to="/about"><v-list-item link prepend-icon="mdi-folder" :active="menu === 'about'" @click="menu = 'about'">About</v-list-item></RouterLink>
            </v-list>
        </v-navigation-drawer>

        <v-main style="min-height: 300px;">
            <RouterView />
        </v-main>
    </v-layout>
</template>