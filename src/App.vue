<script setup>
import { RouterLink, RouterView } from "vue-router";
import CardVue from "./components/Card.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav></nav>
    </div>
  </header>

  <RouterView />
  
</template>

<style>
@import "./assets/bootstrap.min.css";
</style>
