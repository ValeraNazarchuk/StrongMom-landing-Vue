<template>
  <section class="during-pregn">
    <img class="during-pregn__bg-text" src="/images/Healthy.svg" alt="">
    <div class="during-pregn__inner">
      <div class="during-pregn__img">
        <img src="/images/during-pregn.png" alt="phone" />
      </div>
      <div class="during-pregn__content">
        <h3 class="title">{{ $t('duringPregn.title') }}</h3>
        <span class="border-line"></span>
        <p class="during-pregn__content-text">{{ $t('duringPregn.text') }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SectionDuringPregn',
})
</script>

<style lang="scss"></style>
