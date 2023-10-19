<template>
  <div class="about">
    <div class="container">
      <AboutBanner/>
      <AboutCreaters/>
    </div>
  </div>
</template>

<script lang="ts">
import AboutBanner from '../components/AboutBanner/AboutBanner.vue'
import AboutCreaters from '../components/AboutCreaters/AboutCreaters.vue'
export default {
  name: 'About',
  components: {
    AboutBanner,
    AboutCreaters
  },
}
</script>

<style></style>
