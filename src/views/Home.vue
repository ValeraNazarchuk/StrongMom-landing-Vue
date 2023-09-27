<template>
  <div class="home">
    <div class="container">
      <SectionBanner />
      <SectionWork />
      <SectionBenefits />
      <SectionBeforePregn />
      <SectionDuringPregn />
      <SectionBlog />
      <GoToForm />
    </div>
  </div>
</template>

<script lang="ts">
import SectionBanner from '../components/Banner/Banner.vue'
import SectionWork from '../components/Work/Work.vue'
import SectionBenefits from '../components/Benefits/Benefits.vue'
import SectionBeforePregn from '../components/BeforePregn/BeforePregn.vue'
import SectionDuringPregn from '../components/DuringPregn/DuringPregn.vue'
import SectionBlog from '../components/Blog/Blog.vue'
import GoToForm from '../components/GoToForm/GoToForm.vue'
export default {
  name: 'Home',
  components: {
    SectionBanner,
    SectionWork,
    SectionBenefits,
    SectionBeforePregn,
    SectionDuringPregn,
    SectionBlog,
    GoToForm,
  },
}
</script>

<style></style>
