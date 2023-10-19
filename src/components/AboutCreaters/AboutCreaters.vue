<template>
  <section class="about-creaters">
    <div class="about-creaters__inner">
      <div class="about-creaters__images">
        <img src="../../assets/images/abuotCreaters.jpg" alt="photo">
      </div>
      <div class="about-creaters__content">
        <span class="about-creaters__subtitle">{{ $t('aboutCreaters.textTop') }}</span>
        <h1 class="about-creaters__title">{{ $t('aboutCreaters.title') }}</h1>
        <div class="about-creaters__box">
          <p class="about-creaters__text">
            {{ $t('aboutCreaters.aboutMaria') }}
          </p>
          <p class="about-creaters__text">
            {{ $t('aboutCreaters.aboutTilda') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutCreaters',
})
</script>

<style lang="scss"></style>
