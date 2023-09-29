<template>
  <ul class="footer__list">
    <li class="footer__list-item" v-for="(item, index) in list" :key="index">
      <RouterLink class="footer__list-link" :to="item.link">{{
        item.text
      }}</RouterLink>
    </li>
  </ul>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import { IFooterList } from '../../../interface/index.ts'

export default defineComponent({
  name: 'ListRenderer',
  props: {
    list: {
      type: Array as PropType<IFooterList[]>,
      required: true,
    },
  },
})
</script>

<style scoped></style>
