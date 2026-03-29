<template>
    users
    <div v-if="loading">
        Loading...
    </div>
    <div v-if="!loading && err">
        {{ err }}
    </div>
    <div v-for="user in data ?? []" style="border: 1px solid red;" :key="user.id">
        <UserCard :id="user.id" :name="user.name" :username="user.username" :address="user.address" :phone="user.phone"
            :website="user.website" :company="user.company" @delete="handleDelete" />
    </div>
</template>

<script setup lang="ts">
import useFetch from '@/Hooks/useFetch'
import { onMounted } from 'vue'
import type { User } from '@/Types'
import UserCard from '@/components/UserCard.vue'

const handleDelete = (id: number): void => {
    if (!data.value) return
    
    data.value = data.value?.filter(c => c.id !== id)
}

const { loading, data, err, getData } = useFetch<User[]>("https://jsonplaceholder.typicode.com/users")

onMounted(() => {
    getData()
})

</script>

<style scoped></style>