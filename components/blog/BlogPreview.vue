<template>
  <div v-if="blog" class="blog-preview flex-col">
    <!-- <NuxtLink :to="`/${$route.params.blogId}/edit-blog/`">
      <EditIcon class="edit-icon cursor-pointer" />
    </NuxtLink> -->
    <img :src="blog.image_url" class="blog-image img-cover">
    <div class="content">
      <h1 class="content-title text-42 bold mb-20 capitalize">
        {{ blog.title }}
      </h1>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="text-18" v-html="blog.content" />
    </div>
  </div>
</template>

<script>
// import EditIcon from '~/components/svg/EditIcon'
export default {
  components: {
    // EditIcon
  },
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
.blog-preview {
  position: relative;
  .edit-icon {
    width: rem(36);
    height: rem(36);
    position: absolute;
    right: rem(20);
    top: rem(20);
    fill: #fff;
    stroke: #fff;
  }
  .blog-image {
    height: rem(500);
  }
  .content {
    padding: rem(60) rem(40);
    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
}
</style>
