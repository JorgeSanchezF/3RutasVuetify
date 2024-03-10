<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const navigate = (route) => {
  router.push(route);
};
</script>
<template>
  <v-list lines="one">
    <v-row>
      <v-col>
        <v-list-item><v-btn @click="navigate('/')">Inicio</v-btn></v-list-item></v-col
      >
      <v-col>
        <v-list-item
          ><v-btn @click="navigate('/configuracion')">Configuracion</v-btn></v-list-item
        ></v-col
      >
      <v-col>
        <v-list-item
          ><v-btn @click="navigate('/listado')">Listado</v-btn></v-list-item
        ></v-col
      ></v-row
    >
  </v-list>
</template>
