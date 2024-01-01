<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const exampleRoute = () => {
  router.push('/rapat');
  route.params.uuid;
};
</script>

<template>
  <h1>Hello World</h1>
</template>
