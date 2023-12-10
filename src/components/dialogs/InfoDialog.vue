<script setup>
    const props = defineProps(['dialog']);
</script>
<template>
   <v-snackbar v-model="props.dialog.status" location="top right" :color="props.dialog.color" timeout="2000">
      <div class="text-subtitle-1 pb-2">{{ props.dialog.messageHeader }}</div>

      <p>{{ props.dialog.message }}</p>

      <template v-slot:actions>
        <v-btn color="indigo" variant="text" @click="props.dialog.status = false">
          Tutup
        </v-btn>
      </template>
    </v-snackbar>
</template>