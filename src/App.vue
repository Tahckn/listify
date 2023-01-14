<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar />
  <div class="my-0 mx-auto max-w-7xl py-0 px-5">
    <RouterView />
  </div>
</template>
