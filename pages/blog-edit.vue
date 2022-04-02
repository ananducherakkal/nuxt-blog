<template>
  <div class="page">
    <input-wrapper>
      <input v-model="title" type="text" class="input" placeholder="Title">
    </input-wrapper>
    <input-wrapper>
      <input v-model="imageUrl" type="text" class="input" placeholder="Image Url">
    </input-wrapper>
    <input-wrapper>
      <rich-text v-model="description" />
    </input-wrapper>
    <button @click="submit()">
      Submit
    </button>
  </div>
</template>

<script>
import InputWrapper from '~/components/elements/InputWrapper'
import RichText from '~/components/elements/RichText'
export default {
  components: {
    InputWrapper,
    RichText
  },
  data () {
    return {
      title: null,
      description: null,
      imageUrl: null
    }
  },
  methods: {
    async submit () {
      const data = {
        title: this.title,
        description: this.description,
        image_url: this.imageUrl
      }
      await this.$store.dispatch('blog/addBlog', data)
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  padding: rem(120) rem(200);
}
</style>
