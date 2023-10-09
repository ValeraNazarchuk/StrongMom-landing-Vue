<template>
  <div class="work__content" v-for="(item, index) in dataOutput" :key="index">
    <img
      class="work__content-icon"
      :src="`/images/icons/${item.icon}`"
      alt="icon"
    />
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

import enData from '../../../i18n/en.json'
import svData from '../../../i18n/sv.json'

export default defineComponent({
  name: 'BlockContent',
  data() {
    return {
      currentLanguage: 'en',
      en: enData,
      sv: svData,
    }
  },
  computed: {
    dataOutput() {
      const data =
        this.currentLanguage === this.$i18n.locale ? this.en : this.sv
      return data.work.content
    },
  },
})
</script>

<style scoped></style>
