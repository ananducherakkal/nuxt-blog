<template>
  <BlogPreview :blog="blog" />
</template>

<script>
import BlogPreview from '~/components/blog/BlogPreview'
export default {
  name: 'BlogPreviewPage',
  components: {
    BlogPreview
  },
  async asyncData (context) {
    let blog = null
    await context.store.dispatch('blog/getBlog', { id: context.route.params.blogId })
      .then((response) => {
        blog = response
      })
    return {
      blog
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
