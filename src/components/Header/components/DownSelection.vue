<template>
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
        <a class="header__down-link" :href="item.link" target="_blank">{{
          item.text
        }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PrimaryButton from '../../UI/PrimaryButton.vue'

export default defineComponent({
  name: 'DownSelection',
  components: {
    PrimaryButton,
  },

  data() {
    return {
      isDropdownOpen: false,
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

<style scoped>

</style>
