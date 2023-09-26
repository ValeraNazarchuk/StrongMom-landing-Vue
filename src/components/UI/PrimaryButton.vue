<template>
  <button @click="onClick" :style="buttonStyle" class="primary-button">
    {{ buttonText }}
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'PrimaryButton',
  props: {
    buttonText: String,
    buttonWidth: String,
    buttonWHeight: String,
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void>,
    },
  },
  computed: {
    buttonStyle() {
      return {
        width: this.buttonWidth,
        height: this.buttonWHeight,
      }
    },
  },
})
</script>

<style lang="scss">
@import '../../assets/styles/vars';

.primary-button {
  cursor: pointer;
  color: $fs-white;
  font-size: 18px;
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
</style>
