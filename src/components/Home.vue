<script setup>
const { title } = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h1>{{ title }}</h1>
  <p>This is home page</p>
</template>

<style scoped></style>
