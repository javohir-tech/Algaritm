<script setup lang="ts">
import useFetch from '@/Composables/useFetch';
import { onMounted } from 'vue';
import type { IUser } from '@/Types';

const { loading, data, err, getData } = useFetch<IUser>("https://jsonplaceholder.typicode.com/users")

onMounted(() => {
  getData()
})
</script>

<template>
  <p v-for="user in data" :key="user.id">
    {{ user.name }}
  </p>
</template>
