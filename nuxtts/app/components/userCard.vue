<template>
    <p>{{ props.name }}</p>
    <button @click="handleDelete(props.id)">Delete</button>
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