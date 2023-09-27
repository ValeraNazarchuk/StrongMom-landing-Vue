<template>
  <section class="banner">
    <div class="banner__inner">
      <div class="banner__content">
        <h1 class="banner__title">Strong for life with us</h1>
        <span class="border-line"></span>
        <p class="banner__text">
          The best Pre/postnatal fitness app! 100 exercises divided in before,
          during and after pregnancy. Stay strong and healthy through all stages
          of pregnancy.
        </p>
        <div class="banner__box">
          <a
            class="banner__box-link"
            href="https://play.google.com"
            target="_blank"
          >
            <img src="../../assets/images/google-store.png" alt="store" />
          </a>
          <a
            class="banner__box-link"
            href="https://www.apple.com"
            target="_blank"
          >
            <img src="../../assets/images/app-store.png" alt="store" />
          </a>
        </div>
      </div>
      <div class="banner__img">
        <img src="../../assets/images/banner-iphone.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SectionBanner',
})
</script>

<style lang="scss"></style>
