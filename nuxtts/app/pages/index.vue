<template>
    home NuxtPage
    <div v-if="loading">
        <p>Loading...</p>
    </div>
    <div v-else-if="err">
        {{ err }}
    </div>
    <div v-else-if="data && data.length > 0">
        <div v-for="user in data" :key="user.id">
            <UserCard :name="user.name" :username="user.username" :id="user.id" @delete="handleDelete" />
        </div>
    </div>
    <div v-else>
        is empty
    </div>

</template>

<script setup lang="ts">
import type { IUser } from '~/types';

const { loading, data, err, getData } = useFetch<IUser>("https://jsonplaceholder.typicode.com/users")

const handleDelete = (id: number): void => {
    data.value = data.value.filter(c => c.id !== id)
}

onMounted(() => {
    getData()
})
</script>