<script setup>
    const props = defineProps(['dialog']);
    const emit = defineEmits(['response']);
    const sendDataToParent = () => {
        props.dialog.status = false;
        emit('response', {status: true, data: props.dialog.data});
    };
</script>
<template>
    <v-dialog
      v-model="props.dialog.status"
      max-width="420"
    >
        <v-sheet
            elevation="12"
            max-width="600"
            rounded="lg"
            width="100%"
            class="pa-4 text-center mx-auto"
        >
            <v-icon
            class="mb-5"
            color="warning"
            icon="mdi-information"
            size="112"
            ></v-icon>

            <h2 class="text-h5 mb-6">{{props.dialog.messageHeader}}</h2>

            <p class="mb-4 text-medium-emphasis text-body-2">{{ props.dialog.message }}</p>

            <v-divider class="mb-4"></v-divider>

            <div class="d-flex justify-space-between">
            <v-btn
                @click="sendDataToParent"
                class="text-none"
                color="warning"
                rounded
                variant="flat"
                width="90"
            >
                Ya
            </v-btn>
            <v-btn
                @click="props.dialog.status = false"
                class="text-none"
                color="#cdced3"
                rounded
                variant="flat"
                width="90"
            >
                Tutup
            </v-btn>
            </div>
        </v-sheet>
    </v-dialog>
</template>