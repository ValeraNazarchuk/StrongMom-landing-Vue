<template>
  <section class="before-pregn">
    <div class="before-pregn__inner">
      <div class="before-pregn__content">
        <h3 class="title">{{ $t('beforePregn.title') }}</h3>
        <span class="border-line"></span>
        <p class="before-pregn__content-text">{{ $t('beforePregn.textTop') }}</p>
        <h4 class="subtitle">{{ $t('beforePregn.subtitle') }}</h4>
        <p class="before-pregn__content-text">{{ $t('beforePregn.textBottom') }}</p>
      </div>
      <div class="before-pregn__img">
        <img src="../../assets/images/before-pregnancy.png" alt="phone" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SectionBeforePregn',
})
</script>

<style lang="scss"></style>
