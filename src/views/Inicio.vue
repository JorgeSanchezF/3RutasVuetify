<script setup>
import NavVue from "@/components/Nav.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const fecha = ref(null);
const nombre = ref("");
const apellido = ref("");

const router = useRouter();
function guardar() {
  const datos = ref([nombre, apellido, fecha]);
  router.push;
}
</script>
<template>
  <NavVue />
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="6">
        <v-card class="pa-5" outlined elevation="10">
          <v-text-field v-model="nombre" label="Nombre"></v-text-field>
          <v-text-field v-model="apellido" label="Apellido"></v-text-field>
          <v-date-picker
            v-model="fecha"
            label="Fecha de Nacimiento"
            @input="onDateSelected"
          ></v-date-picker>
          <v-btn variant="outlined" @click="guardar">Guardar</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped></style>
