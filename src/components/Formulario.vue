<script setup>
import { ref } from "vue";

const datos = ref([nombre, apellido, fechaNacimiento]);

function enviar() {
    
}
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-form @submit.prevent="submitForm">
          <v-text-field v-model="formData.nombre" label="Nombre"></v-text-field>
          <v-text-field v-model="formData.apellido" label="Apellido"></v-text-field>
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="formData.fechaNacimiento"
                label="Fecha de Nacimiento"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="formData.fechaNacimiento"
              @input="menu = false"
            ></v-date-picker>
          </v-menu>
          <v-btn type="submit" color="primary" @click="enviar()"> Enviar</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
