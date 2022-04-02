<template>
  <div>
    <div class="form">
      <input-wrapper :error="userId.error" label="Email/Phone number">
        <input v-model="userId.value" type="text" class="input" placeholder="Email/Phone number">
      </input-wrapper>
      <input-wrapper :error="password.error" label="Password">
        <input v-model="password.value" type="password" class="input" placeholder="Password">
      </input-wrapper>
      <submit-button @click="submit()">
        Login
      </submit-button>
    </div>
  </div>
</template>

<script>
import validateInput, { validate } from '~/utils/validation'
import InputWrapper from '~/components/elements/InputWrapper'
import SubmitButton from '~/components/elements/SubmitButton'
export default {
  name: 'LoginPage',
  components: {
    InputWrapper,
    SubmitButton
  },
  data () {
    return {
      userId: {
        value: '',
        check: ['phone', 'email'],
        error: false
      },
      password: {
        value: '',
        check: ['non-empty'],
        error: false
      }
    }
  },
  watch: {
    'userId.value' () {
      this.userId.error = false
    },
    'password.value' () {
      this.password.error = false
    }
  },
  methods: {
    async submit () {
      if (validateInput([this.userId, this.password])) {
        const formData = {
          password: this.password.value
        }
        if (validate(this.userId.value, 'email')) {
          formData.email = this.userId.value
        } else {
          formData.phone = this.userId.value
        }
        await this.$store.dispatch('user/loginUser', formData)
          .then(() => {
            console.log('login successfull')
          })
          .catch((error) => {
            console.log('login failed', error)
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  padding: rem(120) rem(30);
  max-width: rem(500);
  margin: 0 auto;
}
</style>
