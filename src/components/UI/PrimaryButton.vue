<template>
  <button @click="onClick" :style="buttonStyle" class="primary-button" @mouseleave="mouseleave">
    {{ buttonText }}
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'PrimaryButton',
  props: {
    buttonText: String,
    buttonMaxWidth: String,
    buttonWHeight: String,
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void>,
    },
    mouseleave: {
      type: Function as PropType<(e: MouseEvent) => void>,
    },

  },
  computed: {
    buttonStyle() {
      return {
        maxWidth: this.buttonMaxWidth,
        height: this.buttonWHeight,
      }
    },
  },
  
})
</script>

<style lang="scss">
@import '../../assets/styles/vars';

.primary-button {
  width: 100%;
  cursor: pointer;
  color: $fs-white;
  font-size: 18px;
  padding: 0 5px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  border-radius: 100px;
  background: $bg-purple-light;
  transition: all 0.4s;
  &:hover {
    background-color: $bg-purple-dark;
  }
}

@media(max-width: 681px) {
  .primary-button {
    font-size: 14px;
  }
}
</style>
