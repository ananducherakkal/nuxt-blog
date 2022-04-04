<template>
  <div v-if="blog" class="blog-card grid-cols-2">
    <img class="img-cover blog-image" :src="blog.image_url" alt="blog-image">
    <div class="content-wrapper flex-col justify-center">
      <div class="content p-20 pb-12">
        <h1 class="text-6xl mb-4">
          {{ blog.title }}
        </h1>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <!-- <p v-html="blog.description">
          content
        </p> -->
        <button class="btn-1">
          Get started
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      require: true,
      type: Object,
      default: () => null
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-card {
  height: rem(200);
  display: grid;
  grid-template-columns: 1fr 3fr;
  .content-wrapper {
    width: 100%;
    height: 100%;
    padding: rem(90) rem(90) rem(30) rem(90);
  }
}
</style>
