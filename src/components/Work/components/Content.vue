<template>
    <div class="work__content" v-for="(item, index) in data" :key="index">
      <img class="work__content-icon" :src="item.icon" alt="icon" />
      <div class="work__box">
        <h6 class="work__box-title">{{ item.title }}</h6>
        <p class="work__box-text">
          {{ item.text }}
        </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import searchIcon from '../../../assets/images/icons/work-search.svg'
import timelineIcon from '../../../assets/images/icons/work-timeline.svg'

export default defineComponent({
  name: 'BlockContent',
  data() {
    return {
      data: [
        {
          title: 'Browse exercises',
          text: 'Browse over 100 exercises with a video or picture and a description.',
          icon: searchIcon,
        },
        {
          title: 'Create timeline',
          text: 'Take pictures along the way during and after the pregnancy to see the transformation.',
          icon: timelineIcon,
        },
      ],
    }
  },
})
</script>

<style scoped></style>
