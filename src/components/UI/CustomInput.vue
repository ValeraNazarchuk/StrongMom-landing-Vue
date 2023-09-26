<template>
  <input
    class="form-input"
    :value="modelValue"
    @input="updateValue"
    :type="type"
    :placeholder="placeholder"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CustomInput',
  props: {
    modelValue: String,
    placeholder: String,
    type: String,
  },
  methods: {
    updateValue(event: Event) {
      const inputElement = event.target as HTMLInputElement;
      this.$emit('update:modelValue', inputElement.value)
    },
  },
})
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.form-input {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  border-radius: 38px;
  border: 1px solid #c8c2c6;
  background: #fff;
  padding: 15px 30px;
  max-width: 400px;
  width: 100%;
  &::placeholder {
    color: #888;
  }
}
</style>
