<template>
  <ul class="blog__list">
    <li
      class="blog__list-item"
      v-for="(item, index) in blogsOutput"
      :key="index"
    >
      <RouterLink class="blog__list-link" to="/blog">
        <img
          class="blog__list-img"
          :src="`/images/blog/${item.img}`"
          alt="photo"
        />
        <div class="blog__list-content">
          <h5 class="blog__list-title">{{ item.title }}</h5>
          <div class="blog__list-box">
            <div class="blog__list-author" v-show="item.author">
              <img :src="`/images/blog/${item.authorIcon}`" alt="icon author" />
              <p>{{ item.author }}</p>
            </div>
            <p class="blog__list-date">{{ item.date }}</p>
          </div>
        </div>
      </RouterLink>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import enData from '../../../i18n/en.json'
import svData from '../../../i18n/sv.json'

export default defineComponent({
  name: 'ListBlogs',
  data() {
    return {
      currentLanguage: 'en',
      en: enData,
      sv: svData,
    }
  },
  computed: {
    blogsOutput() {
      const data =
        this.currentLanguage === this.$i18n.locale ? this.en : this.sv
      return data.blog.listBlogs
    },
  },
})
</script>

<style scoped></style>
