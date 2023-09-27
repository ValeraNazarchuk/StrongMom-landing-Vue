<template>
  <form class="form" @submit.prevent>
    <div class="container">
      <div class="form__inner">
        <h3 class="form-title">Send your data</h3>
        <CustomInput
          v-model="data.firstName"
          placeholder="First Name"
          type="text"
        />
        <CustomInput
          v-model="data.secondName"
          placeholder="Second Name"
          type="text"
        />
        <CustomInput v-model="data.email" placeholder="Email" type="email" />
        <CustomInput v-model="data.adress" placeholder="Adress" type="text" />
        <PrimaryButton
          buttonText="Submit"
          @click="handleClick"
          buttonWidth="400px"
          buttonWHeight="60px"
        />
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import CustomInput from '../components/UI/CustomInput.vue'
import PrimaryButton from '../components/UI/PrimaryButton.vue'
export default defineComponent({
  name: 'Form',
  components: {
    CustomInput,
    PrimaryButton,
  },
  data() {
    return {
      data: {
        firstName: '',
        secondName: '',
        email: '',
        adress: '',
      },
    }
  },
  methods: {
    handleClick() {
      console.log(`
        Отправленные данные:
        firstName: ${this.data.firstName}
        secondName: ${this.data.secondName}
        email: ${this.data.email}
        adress: ${this.data.adress}
      `)
      this.data = {
        firstName: '',
        secondName: '',
        email: '',
        adress: '',
      };
    },
  },
})
</script>

<style lang="scss">

</style>
