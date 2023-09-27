<template>
  <section class="work">
    <div class="work__inner">
        <h1 class="title">How does it work?</h1>
        <h3 class="subtitle">Easy, fun & essential training for moms</h3>
        <span class="border-line"></span>
        <div class="work__wrap">
          <BlockContent/>
        </div>
      </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BlockContent from './components/Content.vue'

export default defineComponent({
  name: 'SectionWork',
  components: {
    BlockContent
  }
})
</script>

<style lang="scss"></style>
