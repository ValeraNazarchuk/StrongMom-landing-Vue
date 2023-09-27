<template>
  <section class="blog">
    <div class="blog__inner">
      <h3 class="title">Our blog posts</h3>
      <span class="border-line"></span>
      <ListBlogs />
      <div class="blog__more">
        <p class="blog__more-text">Like what you see?</p>
        <RouterLink class="blog__more-link" to="/blog">
          View more
          <img src="../../assets/images/icons/arrow-right.svg" alt="icon" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ListBlogs from './components/ListBlogs.vue';

export default defineComponent({
  name: 'SectionBlog',
  components: {
    ListBlogs
  },
})
</script>

<style lang="scss"></style>
