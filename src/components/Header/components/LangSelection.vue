<template>
  <div class="header__lang-box">
    <button @click="toggleDropdownLang" class="header__lang-btn">
      {{ selectedLanguage.substring(0, 3) }}
      <img
        :class="{ 'rotate-icon': isListVisible }"
        src="../../../assets/images/icons/arrow-down.svg"
        alt="arrow"
      />
    </button>
    <div
      v-show="isListVisible"
      @mouseleave="isListVisible = false"
      class="header__lang-dropdown"
    >
      <button
        class="header__lang-item"
        v-for="(lang, index) in languages"
        :key="index"
        @click="selectLanguage(lang)"
      >
        <img :src="lang.icon" alt="Language Icon" class="header__lang-icon" />
        {{ lang.name }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import swedenIcon from '../../../assets/images/icons/sweden.svg'
import englishIcon from '../../../assets/images/icons/english.svg'

export default defineComponent({
  name: 'LangSelection',
  data() {
    return {
      isListVisible: false,
      selectedLanguage: 'English',
      languages: [
        {
          name: 'Sverige',
          icon: swedenIcon,
        },
        {
          name: 'English',
          icon: englishIcon,
        },
      ],
    }
  },

  methods: {
    toggleDropdownLang() {
      this.isListVisible = !this.isListVisible
    },
    selectLanguage(language: { name: string; icon: string }) {
      this.selectedLanguage = language.name
      this.isListVisible = false
    },
  },
})
</script>

<style scoped></style>
