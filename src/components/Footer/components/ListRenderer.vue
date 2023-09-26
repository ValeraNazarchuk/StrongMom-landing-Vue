<template>
  <div>
    <ul class="footer__list">
      <li
        class="footer__list-item"
        v-for="(item, index) in list"
        :key="index"
      >
        <RouterLink class="footer__list-link" :to="item.link">{{
          item.text
        }}</RouterLink>
      </li>
    </ul>
  </div>
</template>



<script lang="ts">
import { PropType, defineComponent } from 'vue'

interface IProps {
  text: string,
  link: string
}

export default defineComponent({
  name: 'ListRenderer',
  props: {
    list: {
      type: Array as PropType<IProps[]>,
      required: true,
    },
  },
})
</script>

<style scoped>
/* Стили для вашего компонента, если необходимо */
</style>
