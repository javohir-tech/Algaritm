<template>
    users
    <div v-if="loading">
        Loading...
    </div>
    <div v-if="!loading && err">
        {{ err }}
    </div>
    <div v-for="user in data" style="border: 1px solid red;">
        <p>{{ user.name }}</p>
        <p>{{ user.username }}</p>
        <p>{{ user.address.city }}</p>
    </div>
</template>

<script setup lang="ts">
import useFetch from '@/Hooks/useFetch'
import { onMounted } from 'vue'
import type { User } from '@/Types'

const { loading, data, err, getData } = useFetch<User[]>("https://jsonplaceholder.typicode.com/users")

onMounted(() => {
    getData()
})

</script>

<style scoped></style>