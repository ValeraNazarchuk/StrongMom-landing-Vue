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

interface IProps {
  icon: string
  link: string
}

export default defineComponent({
  name: 'ListIcons',
  props: {
    icons: {
      type: Array as PropType<IProps[]>,
      required: true,
    },
  },
})
</script>

<style scoped>
/* Стили для вашего компонента, если необходимо */
</style>
