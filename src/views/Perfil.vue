<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  fecha: String,
});
// const fechaPerfil = defineProps(["fecha"]);

const fechaMal = new Date(props.fecha);
const fechaActual = new Date();
const dia = ref(fechaMal.getDate());
const mes = ref(fechaMal.getMonth() + 1);
const año = ref(fechaMal.getFullYear());
const fecha = ref(new Date(año.value, mes.value, dia.value));

const edad = computed(() => {
  const añoActual = fechaActual.value.getFullYear();

  const añoElejido = fecha.value.getFullYear();

  let diferencia = añoActual - añoElejido;

  if (
    fechaActual.value.getMonth() < fecha.value.getMonth() ||
    (fechaActual.value.getMonth() === fecha.value.getMonth() &&
      fechaActual.value.getDate() < fecha.value.getDate())
  ) {
    diferencia--;
  }
  console.log(diferencia.value);
  return diferencia;
});
</script>
<template></template>
