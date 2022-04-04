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
    <div v-if="submitError" class="input-error">
      Something went wrong
    </div>
    <div class="flex-row">
      <submit-button @click="submitForm()">
        Submit
      </submit-button>
      <submit-button secondary>
        Cancel
      </submit-button>
    </div>
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
  props: {
    blog: {
      require: false,
      type: Object,
      default: () => null
    }
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
      },
      submitError: false
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
  beforeMount () {
    if (this.blog) {
      this.title.value = this.blog.title || ''
      this.imageUrl.value = this.blog.image_url || ''
      this.description.value = this.blog.description || ''
    }
  },
  methods: {
    resetError (input) {
      input.error = false
      this.submitError = false
    },
    resetForm () {
      this.title.value = ''
      this.title.error = false
      this.imageUrl.value = ''
      this.imageUrl.error = false
      this.description.value = ''
      this.description.error = false
    },
    async submitForm () {
      if (validateInput([this.title, this.description, this.imageUrl])) {
        const data = {
          title: this.title.value,
          image_url: this.imageUrl.value,
          description: this.description.value
        }
        let url = 'blog/addBlog'
        if (this.blog) {
          url = 'blog/updateBlog'
          data.id = this.blog.id
        }
        await this.$store.dispatch(url, data)
          .then(() => {
            if (this.blog) {
              console.log(`/${this.blog.id}`)
              this.$router.push(`/${this.blog.id}`)
            } else {
              console.log('/')
              this.$router.push('/')
            }
          })
          .catch(() => {
            this.submitError = true
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
