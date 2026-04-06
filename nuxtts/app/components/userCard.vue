<template>
    <NuxtLink :to="`/users/${props.id}`">
        <p>{{ props.name }}</p>
        <button @click="handleDelete(props.id)">Delete</button>
    </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
    name: string,
    username: string,
    id: number,
}>()

const emit = defineEmits<{
    delete: [id: number]
}>()

const handleDelete = (id: number) => {
    emit("delete", id)
}
</script>