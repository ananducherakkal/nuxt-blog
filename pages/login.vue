<template>
  <div>
    <form class="form" @submit.prevent>
      <input-wrapper :error="userId.error" label="Email/Phone number" error-text="Please enter valid Email/Phone number">
        <input v-model="userId.value" type="text" class="input" placeholder="Email/Phone number">
      </input-wrapper>
      <input-wrapper :error="password.error" label="Password" error-text="Please enter password">
        <input v-model="password.value" type="password" class="input" placeholder="Password">
      </input-wrapper>
      <input-error :error="loginError">
        {{ loginErrorMessage || 'Something went wrong!' }}
      </input-error>
      <submit-button :loading="submitLoading" @click="submit()">
        Login
      </submit-button>
    </form>
  </div>
</template>

<script>
import { getErrorMessage } from '~/utils/error'
import validateInput, { validate } from '~/utils/validation'
import InputWrapper from '~/components/elements/InputWrapper'
import InputError from '~/components/elements/InputError'
import SubmitButton from '~/components/elements/SubmitButton'
export default {
  name: 'LoginPage',
  components: {
    InputWrapper,
    InputError,
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
      },
      loginError: false,
      loginErrorMessage: null,
      submitLoading: false
    }
  },
  watch: {
    'userId.value' () {
      this.resetError(this.userId)
    },
    'password.value' () {
      this.resetError(this.password)
    }
  },
  methods: {
    resetError (input) {
      input.error = false
      this.loginError = false
      this.loginErrorMessage = null
    },
    async submit () {
      if (validateInput([this.userId, this.password])) {
        this.submitLoading = true
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
            this.$router.push('/')
          })
          .catch((error) => {
            this.loginError = true
            this.loginErrorMessage = getErrorMessage(error)
          })
        this.submitLoading = false
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
