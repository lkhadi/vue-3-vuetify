<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
</script>
<template>
    <header>
        <div class="wrapper">
            <nav>
                <RouterLink to="/">Home</RouterLink>
            </nav>
        </div>
    </header>

    <RouterView />
    
    <footer></footer>
</template>