<template>
  <nav class="nav">
    <div
      class="nav__burger"
      @click="toggleMenu"
      :class="{ 'nav__burger--active': isOpen }"
    >
      <span class="nav__burger-line"></span>
    </div>
    <ul class="nav__list" :class="{ 'nav__list--active': isOpen }">
      <li
        v-for="(item, index) in translatedItems"
        :key="index"
        class="nav__list-item"
        @click="toggleMenu"
      >
        <RouterLink class="nav__item-link" :to="item.link">{{
          item.text
        }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'

import enData from '../../../i18n/en.json'
import svData from '../../../i18n/sv.json'

interface IProps {
  text: string
  link: string
}

export default defineComponent({
  name: 'Navbar',
  props: {
    list: {
      type: Array as PropType<IProps[]>,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
      currentLanguage: 'en',
      en: enData,
      sv: svData,
    }
  },
  computed: {
    translatedItems() {
      this.currentLanguage = this.$i18n.locale
      if (this.currentLanguage === 'en') return this.en.header.navList
      if (this.currentLanguage === 'sv') return this.sv.header.navList
    },
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    },
  },
})
</script>

<style scoped></style>
