<template>
  <div class="blog-lisitng grid-cols-3 justify-center">
    <BlogListingCard v-for="blog in blogs" :key="blog.id" :blog="blog" />
  </div>
</template>

<script>
import BlogListingCard from '~/components/blog/BlogListingCard'
export default {
  name: 'BlogList',
  components: {
    BlogListingCard
  },
  async asyncData (context) {
    let blogs = []
    await context.store.dispatch('blog/getBlogs').then((response) => {
      if (response) {
        blogs = response
      }
    })
    return {
      blogs
    }
  },
  mounted () {
    try {
      this.$router.push('/')
    } catch (err) {
      console.log('error', err)
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
