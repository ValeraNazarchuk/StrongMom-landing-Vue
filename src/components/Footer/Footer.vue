<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <a class="logo footer__logo" href="#"> LOGO </a>
        <ListRenderer :list="translatedMenuList" />
        <ListRenderer :list="translatedLegalList" />
        <ListIcons :icons="icons" />
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListRenderer from './components/ListRenderer.vue'
import ListIcons from './components/ListIcons.vue'

import facebookIcon from '/images/icons/Facebook.svg'
import instagramIcon from '/images/icons/Instagram.svg'
import youTubeIcon from '/images/icons/YouTube.svg'
import pinterestIcon from '/images/icons/Pinterest.svg'

import enData from '../../i18n/en.json'
import svData from '../../i18n/sv.json'

export default defineComponent({
  name: 'Footer',
  components: {
    ListRenderer,
    ListIcons,
  },
  data() {
    return {
      currentLanguage: 'en',
      en: enData,
      sv: svData,
      icons: [
        { icon: facebookIcon, link: '' },
        { icon: instagramIcon, link: '' },
        { icon: youTubeIcon, link: '' },
        { icon: pinterestIcon, link: '' },
      ],
    }
  },
  computed: {
    translatedMenuList() {
      const data =
        this.currentLanguage === this.$i18n.locale ? this.en : this.sv

      return data.footer.menuList
    },
    translatedLegalList() {
      const data =
        this.currentLanguage === this.$i18n.locale ? this.en : this.sv

      return data.footer.legalLinks
    },
  },
})
</script>

<style lang="scss"></style>
