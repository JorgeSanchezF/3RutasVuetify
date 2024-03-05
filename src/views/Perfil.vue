<script setup>
import { ref, defineProps } from "vue";

const fechaPerfil = defineProps(["fecha"]);
const fechaHoy = new Date();
const edad = ref(null);


</script>
<template>
  <!-- <v-card class="mx-auto" max-width="434" rounded="0">
    <v-img
      height="100%"
      cover
      src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
    >
      <v-avatar color="grey" size="150" rounded="0">
        <v-img cover src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
      </v-avatar>
      <v-list-item
        class="text-white"
        title="nombreCompleto"
        subtitle="fecha"
      ></v-list-item>
    </v-img>
  </v-card> -->
</template>
