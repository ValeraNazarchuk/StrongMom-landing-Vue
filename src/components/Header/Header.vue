<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <a class="logo header__logo" href="#"> LOGO </a>
        <Navbar :list="navList" />
        <div class="header__buttons">
          <DownSelection />
          <LangSelection />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from './components/Navbar.vue'
import LangSelection from './components/LangSelection.vue'
import DownSelection from './components/DownSelection.vue'

export default defineComponent({
  name: 'Header',
  components: {
    Navbar,
    DownSelection,
    LangSelection,
  },
  data() {
    return {
      navList: [
        { text: 'Home', link: '/home' },
        { text: 'About', link: '/about' },
        { text: 'Pricing', link: '/pricing' },
        { text: 'Facts', link: '/facts' },
        { text: 'Blog', link: '/blog' },
        { text: 'Support', link: '/support' },
      ],
    }
  },
})
</script>

<style lang="scss"></style>
