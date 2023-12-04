<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '../stores/auth';
import backgroundImage from '@/assets/images/login-bg.jpg';
import { postLogin } from '@/plugins/axios';

onMounted(() => {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
});

const authStore = useAuthStore();
const form = ref({
    email: '',
    password: ''
});
const rules = ref({
    email: [],
    password: []
});
const showPassword = ref(false);
const loading = ref(false);
const alert = ref({
    title: 'Error',
    status: false,
    message: '',
    color: 'error',
    icon: '$error'
});

const handleLogin = async () => {
    try {
        loading.value = true;
        const response = await postLogin('/auth/login', {
            data: form.value
        });
        rules.value.email = '';
        rules.value.password = '';
        loading.value = false;
        authStore.login(response.data);
    } catch (error) {
        loading.value = false;
        if (error.status === 422) {
            rules.value.email = error.data.email;
            rules.value.password = error.data.password;
            alert.value.title = 'Perhatian';
            alert.value.status = true;
            alert.value.message = 'Data tidak sesuai. Silahkan dicek kembali.';
            alert.value.color = 'warning';
            alert.value.icon = '$warning';
        } else if (error.status === 401) {
            alert.value.title = 'Perhatian';
            alert.value.status = true;
            alert.value.message = 'Pengguna tidak ditemukan';
            alert.value.color = 'warning';
            alert.value.icon = '$warning';
        } else {
            alert.value.title = 'Error';
            alert.value.status = true;
            alert.value.message = error.data.message;
            alert.value.color = 'error';
            alert.value.icon = '$error';
        }
    }
};
</script>
<template>
    <div>
        <v-container class="fill-height">
            <v-row align="center" justify="center">
                <v-col cols="12">
                    <v-card width="400" height="400">
                        <v-card-title align="center">Administrator Login Page</v-card-title>
                        <v-divider class="my-4"></v-divider>
                        <v-alert v-if="alert.status" :color="alert.color" :icon="alert.icon" :title="alert.title"
                            class="mx-4" :text="alert.message"></v-alert>
                        <v-card-item>
                            <v-form validate-on="submit lazy" @submit.prevent="handleLogin">
                                <v-text-field type="email" v-model="form.email" density="compact" label="Email"
                                    :error-messages="rules.email"></v-text-field>
                                <v-text-field :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="showPassword ? 'text' : 'password'" v-model="form.password" density="compact"
                                    label="Password" :error-messages="rules.password"
                                    @click:append-inner="showPassword = !showPassword"></v-text-field>
                                <v-btn :loading="loading" type="submit" block color="primary" class="mt-2"
                                    text="Login"></v-btn>
                            </v-form>
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>