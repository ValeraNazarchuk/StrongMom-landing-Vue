<template>
  <section class="work">
    <div class="work__inner">
        <h1 class="title">How does it work?</h1>
        <h3 class="subtitle">Easy, fun & essential training for moms</h3>
        <span class="border-line"></span>
        <div class="work__wrap">
          <div class="work__content">
            <img class="work__content-icon" src="../assets/images/icons/work-search.svg" alt="icon">
            <div class="work__box">
              <h6 class="work__box-title">Browse exercises</h6>
              <p class="work__box-text">Browse over 100 exercises with a video or picture and a description.</p>
            </div>
          </div>
          <div class="work__content">
            <img class="work__content-icon" src="../assets/images/icons/work-timeline.svg" alt="icon">
            <div class="work__box">
              <h6 class="work__box-title">Create timeline</h6>
              <p class="work__box-text">Take pictures along the way during and after the pregnancy to see the transformation.</p>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SectionWork',
  components: {},

  data() {
    return {}
  },

  methods: {},
})
</script>

<style lang="scss"></style>
