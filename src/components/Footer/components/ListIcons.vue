<template>
  <div class="footer__icons">
    <a
      v-for="(item, index) in icons"
      :key="index"
      class="footer__icons-link"
      :href="item.link"
    >
      <img :src="item.icon" alt="icon" />
    </a>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import { IFooterIcons } from '../../../interface/index.ts';


export default defineComponent({
  name: 'ListIcons',
  props: {
    icons: {
      type: Array as PropType<IFooterIcons[]>,
      required: true,
    },
  },
})
</script>

<style scoped>
</style>
