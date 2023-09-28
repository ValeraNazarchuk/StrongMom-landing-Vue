<template>
  <div class="header__down-box">
    <PrimaryButton
      :buttonText="$t('header.down.button')"
      buttonMaxWidth="165px"
      buttonWHeight="45px"
      :onClick="toggleDropdown"
    />
    <div
      v-show="isDropdownOpen"
      class="header__down-dropdown"
      @mouseleave="hideList"
    >
      <a class="header__down-link" href="https://www.apple.com/ua/app-store/" target="_blank">{{ $t('header.down.buttonApp') }}</a>
      <a class="header__down-link" href="https://play.google.com/store/games?hl=uk&gl=US" target="_blank">{{ $t('header.down.buttonGoogle')  }}</a>
    </div>
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

<style scoped></style>
