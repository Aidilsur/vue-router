<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <h1>User</h1>
  <RouterView name="header" />
  <RouterView />
  <RouterView name="footer" />
</template>

<style scoped></style>
