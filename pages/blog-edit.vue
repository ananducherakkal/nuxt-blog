<template>
  <div class="page">
    <input-wrapper :error="title.error" label="Title">
      <input v-model="title.value" type="text" class="input" placeholder="Title">
    </input-wrapper>
    <input-wrapper :error="imageUrl.error" label="Image Url">
      <input v-model="imageUrl.value" type="text" class="input" placeholder="Image Url">
    </input-wrapper>
    <input-wrapper :error="description.error" label="Content">
      <rich-text v-model="description.value" placeholder="Content" />
    </input-wrapper>
    <submit-button @click="submit()">
      Submit
    </submit-button>
  </div>
</template>

<script>
import validateInput from '~/utils/validation'
import InputWrapper from '~/components/elements/InputWrapper'
import SubmitButton from '~/components/elements/SubmitButton'
import RichText from '~/components/elements/RichText'
export default {
  components: {
    InputWrapper,
    RichText,
    SubmitButton
  },
  data () {
    return {
      title: {
        value: '',
        check: ['non-empty'],
        error: false
      },
      description: {
        value: '',
        check: ['non-empty'],
        error: false
      },
      imageUrl: {
        value: '',
        check: ['non-empty'],
        error: false
      }
    }
  },
  watch: {
    'title.value' () {
      this.resetError(this.title)
    },
    'description.value' () {
      this.resetError(this.description)
    },
    'imageUrl.value' () {
      this.resetError(this.imageUrl)
    }
  },
  methods: {
    resetError (input) {
      input.error = false
    },
    resetForm () {
      this.title.value = ''
      this.title.error = false
      this.imageUrl.value = ''
      this.imageUrl.error = false
      this.description.value = ''
      this.description.error = false
    },
    async submit () {
      if (validateInput([this.title, this.description, this.imageUrl])) {
        const data = {
          title: this.title.value,
          image_url: this.imageUrl.value,
          description: this.description.value
        }
        await this.$store.dispatch('blog/addBlog', data)
          .then(() => {
            this.resetForm()
          })
          .catch(() => {
            console.log('Sorry cannot add blog')
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  padding: rem(120) rem(200);
}
</style>
