<template>
  <ul class="blog__list">
    <li
      class="blog__list-item"
      v-for="(item, index) in translatedItems"
      :key="index"
    >
      <RouterLink class="blog__list-link" to="/blog">
        <img class="blog__list-img" :src="item.img" alt="photo" />
        <div class="blog__list-content">
          <h5 class="blog__list-title">{{ item.title }}</h5>
          <div class="blog__list-box">
            <div class="blog__list-author" v-show="item.author">
              <img :src="item.authorIcon" alt="icon author" />
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

import blogImg1 from '../../../assets/images/blog/img_1.png'
import blogImg2 from '../../../assets/images/blog/img_2.png'
import blogImg3 from '../../../assets/images/blog/img_3.png'
import blogImg4 from '../../../assets/images/blog/img_4.png'
import blogImg5 from '../../../assets/images/blog/img_5.png'

import blogAuthorIcon from '../../../assets/images/blog/author.png'

export default defineComponent({
  name: 'ListBlogs',
  data() {
    return {
      currentLanguage: 'en',
      en: enData,
      sv: svData,
      icons: [
        {
          img: blogImg1,
          authorIcon: blogAuthorIcon,
        },
        {
          img: blogImg2,
          authorIcon: '',
        },
        {
          img: blogImg3,
          authorIcon: '',
        },
        {
          img: blogImg4,
          authorIcon: '',
        },
        {
          img: blogImg5,
          authorIcon: '',
        },
      ],
    }
  },
  computed: {
    translatedItems() {
      const data = this.currentLanguage === this.$i18n.locale ? this.en : this.sv;
      // return data.blog.listBlogs
      return data.blog.listBlogs.map((item: any, index: any) => ({
          title: item.title,
          author: item.author,
          date: item.date,
          img: this.icons[index].img,
          authorIcon: this.icons[index].authorIcon,
        }))
    },
  },
})
</script>

<style scoped></style>
