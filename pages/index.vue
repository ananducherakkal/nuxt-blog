<template>
  <div class="flex-col">
    <BlogCard v-for="(blog, index) in blogs" :key="blog.id" :blog="blog" :class="{'h-screen': index === 0}" />
  </div>
</template>

<script>
import blogs from '~/assets/json/blogs.json'
import BlogCard from '~/components/elements/BlogCard'
export default {
  name: 'IndexPage',
  components: {
    BlogCard
  },
  computed: {
    blogs: () => blogs
  }
}
</script>
