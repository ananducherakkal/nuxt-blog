<template>
  <div>
    <div class="form">
      <input-wrapper :error="name.error" label="Name">
        <input v-model="name.value" type="text" class="input" placeholder="Name">
      </input-wrapper>
      <input-wrapper :error="email.error" label="Email">
        <input v-model="email.value" type="text" class="input" placeholder="Email">
      </input-wrapper>
      <input-wrapper :error="phone.error" label="Phone number">
        <input v-model="phone.value" type="text" class="input" placeholder="Phone number">
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
import validateInput from '~/utils/validation'
import InputWrapper from '~/components/elements/InputWrapper'
import SubmitButton from '~/components/elements/SubmitButton'
export default {
  name: 'RegisterUser',
  components: {
    InputWrapper,
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
      }
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
          .then(() => {})
          .catch(() => {})
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
