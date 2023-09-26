<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <a class="logo footer__logo" href="#"> LOGO </a>
        <ListRenderer :list="footerMenuList" />
        <ListRenderer :list="footerList" />
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

export default defineComponent({
  name: 'Footer',
  components: {
    ListRenderer,
    ListIcons,
  },
  data() {
    return {
      footerMenuList: [
        { text: 'About', link: '/about' },
        { text: 'Facts', link: '/facts' },
        { text: 'Support', link: '/support' },
      ],
      footerList: [
        { text: 'Terms & Conditions', link: '' },
        { text: 'Privacy Policy', link: '' },
        { text: 'Cookies', link: '' },
      ],
      icons: [
        { icon: facebookIcon, link: '' },
        { icon: instagramIcon, link: '' },
        { icon: youTubeIcon, link: '' },
        { icon: pinterestIcon, link: '' },
      ],
    }
  },
})
</script>

<style lang="scss">
// @import '../assets/styles/blocks/_footer.scss'
</style>
