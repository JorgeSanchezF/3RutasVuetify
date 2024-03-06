<script setup>
import Nav from "@/components/Nav.vue";
import { onMounted, ref } from "vue";

const idProp=defineProps('idEnviar');


console.log(idProp.value);

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
const encontrado = ref(false);
const indice = ref(0);
const nombre = ref("");
const color = ref("");
// function comprobarId() {
//   do {
//     if (listado[indice.value].id == props.id) {
//       nombre.value = listado[indice.value].nombre;
//       color.value = listado[indice.value].color;
//     } else {
//       indice.value = indice.value + 1;
//     }
//   } while (encontrado == false);
// }
// onload(comprobarId);
// nombre.value=listado[prop.id].nombre;
// color.value=listado[prop.id].color
</script>
<template>
  <Nav />
  <!-- <h1>{{ prop.id }}</h1> -->
    <div class="card-body">
      <input class="card-title" v-model="nombre" readonly></input>
      <input class="card-text" v-model="color" readonly></input>
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