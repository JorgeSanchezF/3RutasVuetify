<script setup>
import Nav from "@/components/Nav.vue";
import { defineProps } from "vue";

const listado = [
  {
    id: 1,

    nombre: "Pepe",

    color: "rojo",
  },

  {
    id: 2,

    nombre: "Luis",

    color: "Azul",
  },

  {
    id: 3,

    nombre: "Marta",

    color: "Verde",
  },

  {
    id: 4,

    nombre: "Jose",

    color: "Amarillo",
  },

  {
    id: 5,

    nombre: "Alicia",

    color: "Morado",
  },
];

const props = defineProps({
  id: {
    type: Number,

    required: true,
  },
});

const idProp = props.id;

const item = listado.find((i) => i.id === idProp);
</script>
<template>
  <Nav></Nav>
  <div class="card" v-if="item">
    <div class="card-body">
      <h2 class="card-title">{{ item.nombre }}</h2>

      <p class="card-text">{{ item.color }}</p>
    </div>
  </div>
</template>
<style scoped>
.card-body {
  padding: 1rem;

  border: 1px solid #ccc;

  border-radius: 4px;

  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.25rem;

  font-weight: bold;

  margin-top: 0;
}

.card-text {
  font-size: 1rem;

  margin-bottom: 0;
}
</style>
