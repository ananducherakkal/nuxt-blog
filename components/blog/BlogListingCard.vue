<template>
  <NuxtLink v-if="blog" :to="`/${blog.id}`" class="blog-listing-card flex-col">
    <img :src="blog.image_url" alt="" class="content-image img-cover">
    <div class="content">
      <div class="content-title uppercase text-14 semi-bold mb-14">
        {{ blog.category }}
      </div>
      <h2 class="content-heading text-16 first-capitalize bold mb-20">
        {{ blog.title }}
      </h2>
      <p class="content-desc text-14 text-light first-capitalize">
        {{ blog.description }}
      </p>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    blog: {
      require: false,
      type: Object,
      default: () => null
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-listing-card {
  width: rem(370);
  min-height: rem(500);
  border-radius: rem(15);
  box-shadow: 0 1px 6px 0 rgb(0 0 0 / 20%);
  overflow: hidden;
  background-color: #f8f8f8;
  .content-image {
    height: rem(230);
  }
  .content {
    flex: 1;
    padding: rem(29) rem(26) rem(17);
    .content-title {
      color: #E39392;
    }
  }
}
</style>
