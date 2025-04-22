<script setup>
import { ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";

const products = ref([]);
const route = useRoute();
const search = ref(route.query.product || "");
const router = useRouter();

watchEffect(() => {
  router.replace({ query: { product: search.value } }); // replace or push
  fetch("/api/products.json")
    .then((response) => response.json())
    .then((products) =>
      products.filter((product) => product.name.includes(search.value))
    )
    .then((data) => {
      products.value = data;
    });
});
</script>
<template>
  <h1>Products</h1>
  <form>
    <input
      type="text"
      name="product"
      v-model="search"
      placeholder="Search products"
    />
  </form>
  <h2>Search Results</h2>
  <p v-if="products.length === 0">No products found</p>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
