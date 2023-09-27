<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <a class="logo header__logo" href="#"> LOGO </a>
        <Navbar :list="navList" />
        <div class="header__buttons">
          <div class="header__down-box">
            <PrimaryButton
              buttonText="Download"
              buttonWidth="165px"
              buttonWHeight="45px"
              :onClick="toggleDropdown"
            />
            <ul
              v-show="isDropdownOpen"
              class="header__down-dropdown"
              @mouseleave="hideList"
            >
              <li v-for="(item, index) in dropdownItems" :key="index">
                <a
                  class="header__down-link"
                  :href="item.link"
                  target="_blank"
                  >{{ item.text }}</a
                >
              </li>
            </ul>
          </div>
          <LangSelection />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from './components/Navbar.vue'
import PrimaryButton from '../UI/PrimaryButton.vue'
import LangSelection from './components/LangSelection.vue'

export default defineComponent({
  name: 'Header',
  components: {
    Navbar,
    PrimaryButton,
    LangSelection,
  },
  data() {
    return {
      isDropdownOpen: false,
      navList: [
        { text: 'Home', link: '/' },
        { text: 'About', link: '/about' },
        { text: 'Pricing', link: '/pricing' },
        { text: 'Facts', link: '/facts' },
        { text: 'Blog', link: '/blog' },
        { text: 'Support', link: '/support' },
      ],
      dropdownItems: [
        { text: 'App Store', link: 'https://www.apple.com/ua/app-store/' },
        {
          text: 'Google Play',
          link: 'https://play.google.com/store/games?hl=uk&gl=US',
        },
      ],
    }
  },

  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    hideList() {
      this.isDropdownOpen = false
    },
  },
})
</script>

<style lang="scss"></style>
