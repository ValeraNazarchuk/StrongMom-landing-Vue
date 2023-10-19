<template>
  <section class="about-banner">
    <div class="about-banner__inner">
      <h1 class="title">{{ $t('aboutBanner.title') }}</h1>
      <span class="border-line"></span>
      <div class="about-banner__content">
        <p class="about-banner__text">
          {{ $t('aboutBanner.textTop') }}
        </p>
        <p class="about-banner__text">
          {{ $t('aboutBanner.textBottom') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutBanner',
})
</script>

<style lang="scss"></style>
