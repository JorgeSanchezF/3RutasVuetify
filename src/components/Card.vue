<script setup>
    defineProps(["id", "title", "body"])
</script>
<template>
    <div>
        
        <div class="card-body">
        <h5 class="card-title">{{id}}</h5>
        <h1>{{ title }}</h1>
        <p class="card-text">{{ body }}</p>
    
  </div>
</div>
</template>