<template>
  <BlogEdit :blog="blog" />
</template>

<script>
import BlogEdit from '~/components/blog/BlogEdit'
export default {
  components: {
    BlogEdit
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
