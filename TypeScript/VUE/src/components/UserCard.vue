<script setup lang="ts">
import type { User } from '@/Types';
const props = defineProps<User>()

const emit = defineEmits<{
   (e: "delete", value: number): void
}>()

const handleDelete = (id: number): void => {
   emit("delete", id)
}

</script>

<template>
   <p>{{ props.name }}</p>
   <p>{{ props.username }}</p>
   <p>{{ props.phone }}</p>
   <button @click="handleDelete(props.id)">Ochirish</button>
</template>

<style scoped></style>