<script setup lang="ts">
import useFetch from '@/Composables/useFetch';
import { onMounted } from 'vue';
import type { IUser } from '@/Types';
import UserCard from '@/components/UserCard.vue';

const { loading, data, err, getData } = useFetch<IUser>("https://jsonplaceholder.typicode.com/users")

const handleDelete = (id: number): void => {
  data.value = data.value.filter(c => c.id !== id)
}

onMounted(() => {
  getData()
})
</script>

<template>
  <div class="loading" v-if="loading">
    <p>Loading ...</p>
  </div>
  <div v-if="!loading && err">
    <p>{{ err }}</p>
  </div>
  <UserCard v-if="!loading" v-for="user in data" :key="user.id" :id="user.id" :name="user.name" :address="user.address"
    @delete="handleDelete" />
</template>
