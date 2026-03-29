<script setup lang="ts">
import type { User } from '@/Types';
const props = defineProps<User>()
</script>

<template>
   <p>{{ props.name }}</p>
   <p>{{ props.username }}</p>
   <p>{{ props.phone }}</p>
</template>

<style scoped>

</style>