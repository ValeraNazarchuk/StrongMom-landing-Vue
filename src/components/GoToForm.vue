<template>
  <section class="go-form">
    <div class="go-form__inner">
      <h3 class="form-title">Send your data</h3>
      <RouterLink class="go-form__link" to="/form">
        <PrimaryButton
          buttonText="Go to form"
          buttonWidth="400px"
          buttonWHeight="60px"
        />
      </RouterLink>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PrimaryButton from './UI/PrimaryButton.vue'

export default defineComponent({
  name: 'GoToForm',
  components: {
    PrimaryButton,
  },
  data() {
    return {}
  },

  methods: {},
})
</script>

<style lang="scss">
</style>
