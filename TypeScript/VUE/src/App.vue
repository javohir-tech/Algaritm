<script setup lang="ts">

</script>

<template>
    <ul class="navbar">
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/users">Users</RouterLink>
      </li>
    </ul>
    <RouterView/>
</template>

<style scoped>
.navbar{
  display: flex;
  gap: 30px;
}
</style>
