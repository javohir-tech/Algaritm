<script setup>
import { reactive } from 'vue';

const user = reactive({
  age: 21
})

const increment = () => {
  user.age ++
}
</script>

<template>
  <header>
    VUE learn
  </header>
  <p>User age {{ user.age }}</p>
  <button @click="increment">increment</button>
  <RouterView />
</template>

<style scoped></style>
