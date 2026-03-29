<template>
    users
    <div v-if="loading">
        Loading...
    </div>
    <div v-if="!loading && err">
        {{ err }}
    </div>
    <div v-for="user in data ?? []" style="border: 1px solid red;" :key="user.id">
        <UserCard :name="user.name" :username="user.username" :address="user.address" />
    </div>
</template>

<script setup lang="ts">
import useFetch from '@/Hooks/useFetch'
import { onMounted } from 'vue'
import type { User } from '@/Types'
import UserCard from '@/components/UserCard.vue'

const { loading, data, err, getData } = useFetch<User[]>("https://jsonplaceholder.typicode.com/users")

onMounted(() => {
    getData()
})

</script>

<style scoped></style>