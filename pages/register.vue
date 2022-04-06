<template>
  <div>
    <form class="form" @submit.prevent>
      <input-wrapper :error="name.error" :error-text="'Please enter Name'" label="Name">
        <input v-model="name.value" type="text" class="input" placeholder="Name">
      </input-wrapper>
      <input-wrapper :error="email.error" :error-text="'Please enter valid Email'" label="Email">
        <input v-model="email.value" type="text" class="input" placeholder="Email">
      </input-wrapper>
      <input-wrapper :error="phone.error" :error-text="'Please enter valid Phone number'" label="Phone number">
        <input v-model="phone.value" type="text" class="input" placeholder="Phone number">
      </input-wrapper>
      <input-wrapper :error="password.error" :error-text="'Please enter password'" label="Password">
        <input v-model="password.value" type="password" class="input" placeholder="Password">
      </input-wrapper>
      <input-error :error="registerError">
        {{ registerErrorMessage || 'Something went wrong!' }}
      </input-error>
      <submit-button @click="submit()">
        Sign Up
      </submit-button>
    </form>
  </div>
</template>

<script>
import { getErrorMessage } from '~/utils/error'
import validateInput from '~/utils/validation'
import InputWrapper from '~/components/elements/InputWrapper'
import InputError from '~/components/elements/InputError'
import SubmitButton from '~/components/elements/SubmitButton'
export default {
  name: 'RegisterUser',
  components: {
    InputWrapper,
    InputError,
    SubmitButton
  },
  data () {
    return {
      name: {
        value: '',
        check: ['non-empty'],
        error: false
      },
      email: {
        value: '',
        check: ['email'],
        error: false
      },
      phone: {
        value: '',
        check: ['phone'],
        error: false
      },
      password: {
        value: '',
        check: ['non-empty'],
        error: false
      },
      registerError: false,
      registerErrorMessage: null
    }
  },
  watch: {
    'name.value' () {
      this.resetError(this.name)
    },
    'email.value' () {
      this.resetError(this.email)
    },
    'phone.value' () {
      this.resetError(this.phone)
    },
    'password.value' () {
      this.resetError(this.password)
    }
  },
  methods: {
    resetError (input) {
      input.error = false
      this.registerError = false
      this.registerErrorMessage = null
    },
    async submit () {
      if (validateInput([this.name, this.email, this.phone, this.password])) {
        const formData = {
          name: this.name.value,
          email: this.email.value,
          phone: this.phone.value,
          password: this.password.value
        }
        await this.$store.dispatch('user/registerUser', formData)
          .then(() => {
            this.$router.push('/')
          })
          .catch((error) => {
            this.registerError = true
            this.registerErrorMessage = getErrorMessage(error)
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
