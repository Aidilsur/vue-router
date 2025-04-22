<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <h1>User</h1>
  <ul>
    <li><RouterLink to="/users/profile">Profile</RouterLink></li>
    <li><RouterLink to="/users/order">Order</RouterLink></li>
    <li><RouterLink to="/users/wishlist">Wishlist</RouterLink></li>
  </ul>
  <RouterView />
  <div>Put footer here</div>
</template>

<style scoped>
.router-link-active {
  color: red;
  font-weight: bold;
}
</style>
