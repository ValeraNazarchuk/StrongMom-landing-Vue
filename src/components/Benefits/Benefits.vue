<template>
  <section class="benefits">
    <div class="benefits__inner">
        <h3 class="title">{{ $t('benefits.title') }}</h3>
        <h4 class="subtitle">{{ $t('benefits.subtitle') }}</h4>
        <span class="border-line"></span>
      </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SectionBenefits',
})
</script>

<style lang="scss"></style>
