<template>
  <div class="header__lang-box">
    <button @click="toggleDropdownLang" class="header__lang-btn">
      {{ selectedLanguage }}
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
      <button class="header__lang-item" @click="changeLanguage('en')">
        <img
          src="../../../assets/images/icons/english.svg"
          alt="Language Icon"
          class="header__lang-icon"
        />
        {{ $t('header.lang.buttonEn') }}
      </button>
      <button class="header__lang-item" @click="changeLanguage('sv')">
        <img
          src="../../../assets/images/icons/sweden.svg"
          alt="Language Icon"
          class="header__lang-icon"
        />
        {{ $t('header.lang.buttonSv') }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LangSelection',
  data() {
    return {
      isListVisible: false,
      selectedLanguage: 'Eng',
    }
  },

  methods: {
    toggleDropdownLang() {
      this.isListVisible = !this.isListVisible
    },
    selectLanguage(language: string) {
      if (language === 'en') this.selectedLanguage = 'Eng'
      else this.selectedLanguage = 'Sve'
    },
    changeLanguage(locale: string) {
      this.$i18n.locale = locale
      this.isListVisible = false
      this.selectLanguage(locale)
    },
  },
})
</script>

<style scoped></style>
