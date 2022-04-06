<template>
  <div class="page">
    <form @submit.prevent>
      <input-wrapper :error="title.error" label="Title" error-text="Please enter title">
        <input v-model="title.value" type="text" class="input" placeholder="Title">
      </input-wrapper>
      <input-wrapper :error="description.error" label="Description" error-text="Please enter description">
        <input v-model="description.value" class="input" placeholder="Description">
      </input-wrapper>
      <input-wrapper :error="imageUrl.error" label="Image Url" error-text="Please enter image url">
        <input v-model="imageUrl.value" type="text" class="input" placeholder="Image Url">
      </input-wrapper>
      <input-wrapper :error="content.error" label="Content" error-text="Please enter content">
        <rich-text v-model="content.value" placeholder="Content" />
      </input-wrapper>
      <div v-if="submitError" class="input-error">
        Something went wrong
      </div>
      <div class="flex-row">
        <submit-button @click="submitForm()">
          Add
        </submit-button>
        <NuxtLink to="/" class="secondary-btn">
          Cancel
        </NuxtLink>
      </div>
    </form>
    <LoadingBar :loading="loading" />
  </div>
</template>

<script>
import validateInput from '~/utils/validation'
import InputWrapper from '~/components/elements/InputWrapper'
import SubmitButton from '~/components/elements/SubmitButton'
import RichText from '~/components/elements/RichText'
import LoadingBar from '~/components/elements/LoadingBar'
export default {
  components: {
    InputWrapper,
    RichText,
    SubmitButton,
    LoadingBar
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
      loading: true,
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
      content: {
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
    },
    'content.value' () {
      this.resetError(this.content)
    }
  },
  mounted () {
    this.loading = false
  },
  beforeMount () {
    if (this.blog) {
      this.title.value = this.blog.title || ''
      this.imageUrl.value = this.blog.image_url || ''
      this.description.value = this.blog.description || ''
      this.content.value = this.blog.content || ''
    }
  },
  methods: {
    resetError (input) {
      input.error = false
      this.submitError = false
    },
    async submitForm () {
      if (validateInput([this.title, this.imageUrl, this.description, this.content])) {
        const data = {
          title: this.title.value,
          description: this.description.value,
          image_url: this.imageUrl.value,
          content: this.content.value
        }
        let url = 'blog/addBlog'
        if (this.blog) {
          url = 'blog/updateBlog'
          data.id = this.blog.id
        }
        await this.$store.dispatch(url, data)
          .then(() => {
            if (this.blog) {
              this.$router.push(`/${this.blog.id}`)
            } else {
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
