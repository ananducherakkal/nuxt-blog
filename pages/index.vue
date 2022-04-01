<template>
  <div class="flex-col">
    <BlogCard v-for="(blog, index) in blogs" :key="blog.id" :blog="blog" :class="{'h-screen': index === 0}" />
  </div>
</template>

<script>
import BlogCard from '~/components/elements/BlogCard'
export default {
  name: 'IndexPage',
  components: {
    BlogCard
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
  }
}
</script>
