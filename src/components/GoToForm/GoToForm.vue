<template>
  <section class="go-form">
    <div class="go-form__inner">
      <h3 class="form-title">{{ $t('goToForm.title') }}</h3>
      <RouterLink class="go-form__link" to="/form">
        <PrimaryButton
          :buttonText="$t('goToForm.button')"
          buttonMaxWidth="400px"
          buttonWHeight="60px"
        />
      </RouterLink>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PrimaryButton from '../UI/PrimaryButton.vue'

export default defineComponent({
  name: 'GoToForm',
  components: {
    PrimaryButton,
  },
})
</script>

<style lang="scss">
</style>
