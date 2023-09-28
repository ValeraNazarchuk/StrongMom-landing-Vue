<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <a class="logo footer__logo" href="#"> LOGO </a>
        <ListRenderer :list="translatedMenuList" />
        <ListRenderer :list="translatedContentList" />
        <ListIcons :icons="icons" />
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListRenderer from './components/ListRenderer.vue'
import ListIcons from './components/ListIcons.vue'

import facebookIcon from '../../assets/images/icons/Facebook.svg'
import instagramIcon from '../../assets/images/icons/Instagram.svg'
import youTubeIcon from '../../assets/images/icons/YouTube.svg'
import pinterestIcon from '../../assets/images/icons/Pinterest.svg'

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
      footerMenuList: [
        { text: 'About', link: '/about' },
        { text: 'Facts', link: '/facts' },
        { text: 'Support', link: '/support' },
      ],
      footerContentnList: [
        { text: 'Terms & Conditions', link: '/terms' },
        { text: 'Privacy Policy', link: '/policy' },
        { text: 'Cookies', link: '/cookies' },
      ],
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
      this.currentLanguage = this.$i18n.locale
      if (this.currentLanguage === 'en') return this.en.footer.menuList
      else return this.sv.footer.menuList
    },
    translatedContentList() {
      this.currentLanguage = this.$i18n.locale
      if (this.currentLanguage === 'en') return this.en.footer.contentnList
      else return this.sv.footer.contentnList
    },
  },
})
</script>

<style lang="scss">
</style>
