<template>
  <div class="home">
    <div class="container">
      <SectionBanner/>
      <SectionWork/>
      <SectionBenefits/>
      <SectionBeforePregn/>
      <SectionDuringPregn/>
      <SectionBlog/>
      <GoToForm/>
    </div>
  </div>
</template>

<script lang="ts">
import SectionBanner from '../components/Banner.vue'
import SectionWork from '../components/Work.vue'
import SectionBenefits from '../components/Benefits.vue'
import SectionBeforePregn from '../components/BeforePregn.vue'
import SectionDuringPregn from '../components/DuringPregn.vue'
import SectionBlog from '../components/Blog/Blog.vue'
import GoToForm from '../components/GoToForm.vue'
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
  }
}
</script>

<style></style>
