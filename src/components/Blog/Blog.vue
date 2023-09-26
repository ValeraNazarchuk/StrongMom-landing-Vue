<template>
  <section class="blog">
    <div class="blog__inner">
      <h3 class="title">Our blog posts</h3>
      <span class="border-line"></span>
      <ul class="blog__list">
        <li class="blog__list-item" v-for="(item, index) in data" :key="index">
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

import blogImg1 from '../../assets/images/blog/img_1.png'
import blogImg2 from '../../assets/images/blog/img_2.png'
import blogImg3 from '../../assets/images/blog/img_3.png'
import blogImg4 from '../../assets/images/blog/img_4.png'
import blogImg5 from '../../assets/images/blog/img_5.png'

import blogAuthorIcon from '../../assets/images/blog/author.png'
// interface IData {
//   img: string
//   title: string
//   authorIcon: string
//   author: string
//   date: string
// }

export default defineComponent({
  name: 'SectionBlog',
  components: {},

  data() {
    return {
      data: [
        {
          img: blogImg1,
          title:
            'Return to running after pregnancy – Is your body strong enough for running?',
          authorIcon: blogAuthorIcon,
          author: 'BY TILDA LOFTIN',
          date: 'JUNE 25, 2021',
        },
        {
          img: blogImg2,
          title: 'Stroller walks',
          authorIcon: '',
          author: '',
          date: 'APRIL 21, 2021',
        },
        {
          img: blogImg3,
          title: 'Playground workout',
          authorIcon: '',
          author: '',
          date: 'MARCH 17, 2020',
        },
        {
          img: blogImg4,
          title: 'Your Essential Fitness Gear for Each Trimester',
          authorIcon: '',
          author: '',
          date: 'FEBRUARY 21, 2021',
        },
        {
          img: blogImg5,
          title:
            'What YOU could gain by working with a Woman’s Health Physical Therapist ',
          authorIcon: '',
          author: '',
          date: 'JANUARY 23, 2020',
        },
      ],
    }
  },

  methods: {},
})
</script>

<style lang="scss"></style>
