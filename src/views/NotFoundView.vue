<script setup>
import notFoundImage from '@/assets/images/404.png';
</script>
<template>
  <v-row align="center" justify="center" style="height:100vh">
    <v-col cols="12" class="d-flex justify-center">
      <v-img :src="notFoundImage" max-width="400"></v-img>
    </v-col>
  </v-row>
</template>
