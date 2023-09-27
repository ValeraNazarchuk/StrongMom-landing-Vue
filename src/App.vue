<template>
  <div class="wrapper">
    <Header />
    <main class="main">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../src/components/Header/Header.vue'
import Footer from '../src/components/Footer/Footer.vue'
</script>

<style scoped>
</style>
