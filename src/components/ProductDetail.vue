<script setup>
import { ref, watchEffect } from "vue";

const loaded = ref(false);
const error = ref(false);
const product = ref(null);
const { id } = defineProps(["id"]);

watchEffect(() => {
  if (id) {
    fetch(`/api/products/${id}.json`)
      .then((res) => res.json())
      .then((data) => {
        product.value = data;
        loaded.value = true;
      })
      .catch((err) => {
        console.log(`Error loading product : ${err}`);
        error.value = true;
      });
  }
});
</script>

<template>
  <template v-if="id">
    <div v-if="loaded">
      <h1>{{ product.id }} - {{ product.name }}</h1>
      <p>Price : {{ product.price }}</p>
    </div>
    <div v-else-if="error">
      <h1>error loading product : {{ id }}</h1>
    </div>
    <div v-else>
      <h1>Loading product : {{ id }}</h1>
    </div>
  </template>
  <template v-else>
    <h1>No Product Selected</h1>
  </template>
</template>

<style scoped></style>
