<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
const router = useRouter();

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
const idEnviar = ref(null);
function verDetalle(id) {
  // console.log(id);
  idEnviar.value = id;

  router.push("/detalle/" + idEnviar.value);
}
</script>
<template>
  <div v-for="i in listado">
    <div class="card-body">
      <h5 class="card-title">{{ i.id }}</h5>
      <h1>{{ i.nombre }}</h1>
      <v-btn variant="outlined" @click="verDetalle(i.id)">Ver detalle</v-btn>
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
