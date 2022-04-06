<template>
  <div v-if="blogs && blogs.length" class="blog-lisitng grid-cols-3 justify-center">
    <BlogListingCard v-for="blog in blogs" :key="blog.id" :blog="blog" />
  </div>
  <EmptyScreen v-else />
</template>

<script>
import BlogListingCard from '~/components/blog/BlogListingCard'
import EmptyScreen from '~/components/elements/EmptyScreen'
export default {
  name: 'BlogList',
  components: {
    BlogListingCard,
    EmptyScreen
  },
  async asyncData (context) {
    let blogs = []
    const userDetails = context.store.getters['user/userDetails']
    if (userDetails) {
      await context.store.dispatch('blog/getBlogsByUser', { id: userDetails && userDetails.id }).then((response) => {
        if (response) {
          blogs = response
        }
      })
    } else {
      await context.store.dispatch('blog/getBlogs').then((response) => {
        if (response) {
          blogs = response
        }
      })
    }
    return {
      blogs
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-lisitng {
  padding: rem(70);
  column-gap: rem(44);
  row-gap: rem(44);
}
</style>
