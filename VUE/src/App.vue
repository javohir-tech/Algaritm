<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <ul class="list">
    <li><RouterLink to="/">Home</RouterLink></li>
    <li><RouterLink to="/about">About</RouterLink></li>
  </ul>
  <RouterView />
</template>

<style scoped>
.list{
  display: flex;
  align-items: center;
  list-style: none;
  gap: 20px;
}
</style>
