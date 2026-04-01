<template>
    <div class="user_card">
        {{ props.name }}
        <button @click="handleDelate(props.id)">ochirish</button>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    id: number;
    name: string
}>()

const emit = defineEmits<{
    delete: [id: number]
}>()

const handleDelate = (id: number):void => {
    emit('delete', id)
}


</script>